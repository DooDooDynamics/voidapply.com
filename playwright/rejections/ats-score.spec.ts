import { test, expect } from '@playwright/test'
import { rejectionSentinel } from '../helpers/selectors'

test('rejection ats-score animates score and shows verdict', async ({ page }) => {
  test.setTimeout(60000)
  await page.goto('/debug/rejection/ats-score')
  await page.waitForLoadState('networkidle')

  await expect(rejectionSentinel(page, 'ats-score')).toBeVisible()

  // Header
  await expect(page.getByText(/AI Screening Results.*Debug Corp/)).toBeVisible({ timeout: 10000 })
  await expect(page.getByText('Application Compatibility Score')).toBeVisible({ timeout: 10000 })

  // Final overall score from mockData = 42
  await expect(page.locator('svg text', { hasText: /^42$/ })).toBeVisible({ timeout: 30000 })

  // Categories from mockData
  await expect(page.getByText('Buzzword Density')).toBeVisible({ timeout: 30000 })
  await expect(page.getByText('Years of Experience')).toBeVisible({ timeout: 30000 })
  await expect(page.getByText('Resume Font Choice')).toBeVisible({ timeout: 30000 })
  await expect(page.getByText('Vibes')).toBeVisible({ timeout: 30000 })

  // Verdict
  await expect(page.getByText('Recommendation: AUTO-REJECT')).toBeVisible({ timeout: 30000 })
})
