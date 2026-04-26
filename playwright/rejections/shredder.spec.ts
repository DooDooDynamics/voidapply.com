import { test, expect } from '@playwright/test'
import { rejectionSentinel } from '../helpers/selectors'

test('rejection shredder reaches terminal state', async ({ page }) => {
  await page.goto('/debug/rejection/shredder')
  await page.waitForLoadState('networkidle')

  await expect(rejectionSentinel(page, 'shredder')).toBeVisible()

  // Animation runs to "done" terminal state
  await expect(page.getByText('Application Shredded')).toBeVisible({ timeout: 30000 })
  await expect(page.getByText(/Your application has been shredded/i)).toBeVisible({
    timeout: 30000,
  })
  await expect(page.getByText(/Shredded at 24 strips\/sec/)).toBeVisible({ timeout: 30000 })
})
