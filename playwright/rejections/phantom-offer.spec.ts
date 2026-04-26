import { test, expect } from '@playwright/test'
import { rejectionSentinel } from '../helpers/selectors'

test('rejection phantom-offer shows verbal offer, countdown, then rescission', async ({ page }) => {
  test.setTimeout(60000)
  await page.goto('/debug/rejection/phantom-offer')
  await page.waitForLoadState('networkidle')

  await expect(rejectionSentinel(page, 'phantom-offer')).toBeVisible()

  // Offer email phase: recruiter Jamie Chen, salary $180,000, EOD Friday
  await expect(page.getByText('Jamie Chen').first()).toBeVisible({ timeout: 10000 })
  await expect(page.getByText('$180,000')).toBeVisible({ timeout: 10000 })
  await expect(page.getByText('EOD Friday')).toBeVisible({ timeout: 10000 })
  await expect(page.getByText(/Offer.*Senior Debug Engineer.*Debug Corp/)).toBeVisible({
    timeout: 10000,
  })

  // Countdown phase appears
  await expect(page.getByText('Formal offer expected in')).toBeVisible({ timeout: 30000 })

  // Waiting phase
  await expect(page.getByText('Waiting for paperwork...')).toBeVisible({ timeout: 30000 })

  // Rescission email
  await expect(page.getByText(/Re: Your Application.*Senior Debug Engineer/)).toBeVisible({
    timeout: 30000,
  })
  await expect(page.getByText(/put this role on hold/)).toBeVisible({ timeout: 30000 })
})
