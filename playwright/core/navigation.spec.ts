import { test, expect } from '@playwright/test'

test.describe('navigation', () => {
  test('header logo returns to /', async ({ page }) => {
    await page.goto('/search?q=Google')
    await expect(page).toHaveURL(/\/search/)
    // The logo "VoidApply" link in the header.
    await page
      .getByRole('link', { name: /voidapply/i })
      .first()
      .click()
    await expect(page).toHaveURL(/\/$/)
    await expect(
      page.getByRole('heading', { name: /find your next rejection/i }).first()
    ).toBeVisible()
  })

  test('footer links present', async ({ page }) => {
    await page.goto('/')
    const footer = page.locator('footer')
    await expect(footer).toBeVisible()
    await expect(footer.getByRole('link', { name: /source code \| github/i })).toHaveAttribute(
      'href',
      /github\.com/
    )
    await expect(footer.getByRole('link', { name: /developer contact/i })).toHaveAttribute(
      'href',
      /yaqinhasan\.com/
    )
  })

  test('bogus route renders NotFoundPage', async ({ page }) => {
    await page.goto('/whatever-bogus')
    await expect(page.getByRole('heading', { name: '404' }).first()).toBeVisible()
    await expect(
      page.getByRole('heading', { name: /application not found/i }).first()
    ).toBeVisible()
    await expect(page.getByRole('link', { name: /return to the void/i }).first()).toBeVisible()
  })
})
