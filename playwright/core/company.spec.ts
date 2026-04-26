import { test, expect } from '@playwright/test'

test.describe('company page', () => {
  test('shows company info, lists jobs, and clicks into a job', async ({ page }) => {
    await page.goto('/company/google')

    // Company info
    await expect(page.getByRole('heading', { name: 'Google', exact: true }).first()).toBeVisible()
    await expect(
      page.getByText(/Technology · Mountain View, CA · 180,000\+ employees/).first()
    ).toBeVisible()

    // Open Positions section + at least one job
    await expect(page.getByRole('heading', { name: /open positions/i }).first()).toBeVisible()
    const firstJobLink = page.locator('a[href^="/job/"]').first()
    await expect(firstJobLink).toBeVisible()
    const href = await firstJobLink.getAttribute('href')
    await firstJobLink.click()
    await expect(page).toHaveURL(new RegExp(`${href}(\\?|$)`))
  })

  test('unknown company id shows not-found-style message', async ({ page }) => {
    await page.goto('/company/this-company-does-not-exist')
    await expect(page.getByRole('heading', { name: /company not found/i }).first()).toBeVisible()
  })
})
