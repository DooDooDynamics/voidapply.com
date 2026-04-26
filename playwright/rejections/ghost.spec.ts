import { test, expect } from '@playwright/test'
import { rejectionSentinel } from '../helpers/selectors'

test('rejection ghost reaches terminal state', async ({ page }) => {
  test.setTimeout(60000)
  await page.goto('/debug/rejection/ghost')
  await page.waitForLoadState('networkidle')

  await expect(rejectionSentinel(page, 'ghost')).toBeVisible()

  // Initial: spinner / submitting copy is visible
  await expect(page.getByText(/Submitting your application/i)).toBeVisible({ timeout: 10000 })

  // After several seconds nothing visible besides faint state — wait for status text
  await expect(page.getByText('Status: Under Review')).toBeVisible({ timeout: 30000 })
  await expect(page.getByText('(since 2024)')).toBeVisible({ timeout: 30000 })

  // Final ghost line
  await expect(page.getByText('You have been ghosted. Welcome to the real world.')).toBeVisible({
    timeout: 30000,
  })
})
