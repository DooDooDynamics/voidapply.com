import { test, expect } from '@playwright/test'
import { rejectionSentinel } from '../helpers/selectors'

test('rejection black-hole reaches terminal state', async ({ page }) => {
  await page.goto('/debug/rejection/black-hole')
  await page.waitForLoadState('networkidle')

  await expect(rejectionSentinel(page, 'black-hole')).toBeVisible()

  // Initial submitting state
  await expect(page.getByText('Submitting your application...')).toBeVisible({ timeout: 10000 })

  // Terminal "no escape" copy
  await expect(page.getByText('Your application has crossed the event horizon.')).toBeVisible({
    timeout: 30000,
  })
  await expect(page.getByText('No information escapes.')).toBeVisible({ timeout: 30000 })
  await expect(page.getByText(/Hawking radiation detected: 0 callbacks/)).toBeVisible({
    timeout: 30000,
  })
})
