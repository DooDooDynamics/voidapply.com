import { test, expect } from '@playwright/test'
import { rejectionSentinel } from '../helpers/selectors'

test('rejection culture-fit shows offer pending then 2-sentence email', async ({ page }) => {
  test.setTimeout(60000)
  await page.goto('/debug/rejection/culture-fit')
  await page.waitForLoadState('networkidle')

  await expect(rejectionSentinel(page, 'culture-fit')).toBeVisible()

  // Stages dashboard
  await expect(page.getByText(/Application Status Dashboard.*Debug Corp/)).toBeVisible({
    timeout: 10000,
  })
  await expect(page.getByText('Hiring Progress')).toBeVisible({ timeout: 10000 })

  // Offer Pending row appears
  await expect(page.getByText(/Offer Pending/)).toBeVisible({ timeout: 30000 })

  // Email phase: recruiter from mockData
  await expect(page.getByText('Alex from Talent').first()).toBeVisible({ timeout: 30000 })
  await expect(page.getByText('Update on your application')).toBeVisible({ timeout: 30000 })

  // 2-sentence rejection copy
  await expect(page.getByText(/cultural fit/)).toBeVisible({ timeout: 30000 })
  await expect(page.getByText(/wish you the best in your search/)).toBeVisible({ timeout: 30000 })
})
