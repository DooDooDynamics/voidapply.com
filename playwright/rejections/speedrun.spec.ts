import { test, expect } from '@playwright/test'
import { rejectionSentinel } from '../helpers/selectors'

test('rejection speedrun reaches terminal state', async ({ page }) => {
  await page.goto('/debug/rejection/speedrun')
  await page.waitForLoadState('networkidle')

  await expect(rejectionSentinel(page, 'speedrun')).toBeVisible()

  // REJECTED stamp + timer copy
  await expect(page.getByText('REJECTED', { exact: true })).toBeVisible({ timeout: 10000 })
  await expect(page.getByText(/in 0\.003 seconds/)).toBeVisible({ timeout: 10000 })

  // Leaderboard rendered
  await expect(page.getByText('Rejection Speedrun Leaderboard')).toBeVisible({ timeout: 10000 })
  await expect(page.getByRole('cell', { name: 'Amazon' })).toBeVisible({ timeout: 10000 })
  await expect(page.getByText('0.002s')).toBeVisible({ timeout: 10000 })
})
