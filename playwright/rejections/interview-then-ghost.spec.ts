import { test, expect } from '@playwright/test'
import { rejectionSentinel } from '../helpers/selectors'

test('rejection interview-then-ghost walks 4 stages then ghosts', async ({ page }) => {
  test.setTimeout(60000)
  await page.goto('/debug/rejection/interview-then-ghost')
  await page.waitForLoadState('networkidle')

  await expect(rejectionSentinel(page, 'interview-then-ghost')).toBeVisible()

  // Timeline header
  await expect(page.getByText('Your Application Journey')).toBeVisible({ timeout: 10000 })

  // 4 stages from mockData appear
  await expect(page.getByText('Phone Screen')).toBeVisible({ timeout: 30000 })
  await expect(page.getByText('Technical Assessment')).toBeVisible({ timeout: 30000 })
  await expect(page.getByText('Final Round with VP')).toBeVisible({ timeout: 30000 })
  await expect(page.getByText('Offer Stage')).toBeVisible({ timeout: 30000 })

  // Ghost phase lines
  await expect(page.getByText("The recruiter has been 'reassigned'.")).toBeVisible({
    timeout: 30000,
  })
  await expect(page.getByText('[Status: Under Review since 2024]')).toBeVisible({ timeout: 30000 })
})
