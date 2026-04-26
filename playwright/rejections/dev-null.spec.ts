import { test, expect } from '@playwright/test'
import { rejectionSentinel } from '../helpers/selectors'

test('rejection dev-null reaches terminal state', async ({ page }) => {
  test.setTimeout(60000)
  await page.goto('/debug/rejection/dev-null')
  await page.waitForLoadState('networkidle')

  // Sentinel from debug header
  await expect(rejectionSentinel(page, 'dev-null')).toBeVisible()

  // Initial: terminal pipeline header visible
  await expect(page.getByText('rejection-pipeline.sh')).toBeVisible({ timeout: 10000 })

  // Animated lines reveal — wait for terminal content
  await expect(page.getByText('/dev/null: Application successfully discarded.')).toBeVisible({
    timeout: 30000,
  })

  // Terminal copy
  await expect(page.getByText('Your application has been piped to /dev/null.')).toBeVisible({
    timeout: 30000,
  })
})
