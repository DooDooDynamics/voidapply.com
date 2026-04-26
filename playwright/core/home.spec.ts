import { test, expect } from '@playwright/test'

test.describe('home page', () => {
  test('hero renders', async ({ page }) => {
    await page.goto('/')
    await expect(
      page.getByRole('heading', { name: /find your next rejection/i }).first()
    ).toBeVisible()
    await expect(page.getByPlaceholder(/search by job title/i).first()).toBeVisible()
    await expect(page.getByRole('button', { name: 'Search' }).first()).toBeVisible()
  })

  test('featured companies link to /company/:id', async ({ page }) => {
    await page.goto('/')
    // Google appears in companies list — click it.
    const googleLink = page.locator('a[href="/company/google"]').first()
    await expect(googleLink).toBeVisible()
    await googleLink.click()
    await expect(page).toHaveURL(/\/company\/google$/)
    await expect(page.getByRole('heading', { name: 'Google', exact: true }).first()).toBeVisible()
  })

  test('suggested jobs link to /job/:id', async ({ page }) => {
    await page.goto('/')
    const jobLink = page.locator('a[href^="/job/"]').first()
    await expect(jobLink).toBeVisible()
    const href = await jobLink.getAttribute('href')
    await jobLink.click()
    await expect(page).toHaveURL(new RegExp(`${href}(\\?|$)`))
  })

  test('theme toggle switches color scheme', async ({ page }) => {
    await page.goto('/')
    const html = page.locator('html')
    const initialIsDark = await html.evaluate((el) => el.classList.contains('dark'))
    const toggle = page.getByRole('button', { name: /switch to (dark|light) mode/i })
    await toggle.click()
    await expect
      .poll(async () => html.evaluate((el) => el.classList.contains('dark')))
      .not.toBe(initialIsDark)
  })
})
