import { test, expect } from '@playwright/test'
import { rejectionSentinel } from '../helpers/selectors'

test('rejection fake-email shows email with mock company data', async ({ page }) => {
  await page.goto('/debug/rejection/fake-email')
  await page.waitForLoadState('networkidle')

  await expect(rejectionSentinel(page, 'fake-email')).toBeVisible()

  // Inbox skin loads
  await expect(page.getByText("GMailn't")).toBeVisible({ timeout: 10000 })

  // Subject from mockData
  await expect(
    page.getByText('Update on your application for Senior Debug Engineer at Debug Corp')
  ).toBeVisible({ timeout: 30000 })

  // From header — Debug Corp Talent Team (exact span match; body also contains the phrase)
  await expect(page.getByText('Debug Corp Talent Team', { exact: true })).toBeVisible({
    timeout: 10000,
  })
  await expect(page.getByText('<noreply@debug-corp.com>')).toBeVisible({ timeout: 10000 })

  // Body content
  await expect(page.getByText(/Thank you for applying to Debug Corp/)).toBeVisible({
    timeout: 10000,
  })
  await expect(page.getByText(/File deleted on save/)).toBeVisible({ timeout: 10000 })
})
