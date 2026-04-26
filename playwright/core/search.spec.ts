import { test, expect } from '@playwright/test'

test.describe('search', () => {
  test('submitting hero search navigates to /search?q=…', async ({ page }) => {
    await page.goto('/')
    const input = page.getByPlaceholder(/search by job title/i)
    await input.fill('Google')
    await page.getByRole('button', { name: 'Search' }).click()
    await expect(page).toHaveURL(/\/search\?q=Google/)
    await expect(page.getByRole('heading', { name: /results for "google"/i }).first()).toBeVisible()
    // At least one job result should appear (Google has multiple jobs).
    await expect(page.locator('a[href^="/job/"]').first()).toBeVisible()
  })

  test('shows empty-state for nonsense query', async ({ page }) => {
    await page.goto('/search?q=qqqzzz')
    await expect(page.getByText(/no jobs found\./i)).toBeVisible()
    await expect(page.getByRole('link', { name: /back to home/i })).toBeVisible()
  })
})
