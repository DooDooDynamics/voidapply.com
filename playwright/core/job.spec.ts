import { test, expect } from '@playwright/test'

// Use a real job id from src/data/jobs/engineering.ts
const JOB_ID = 'google-senior-frontend'

test.describe('job page', () => {
  test('renders job details and Apply CTA', async ({ page }) => {
    await page.goto(`/job/${JOB_ID}`)
    // URL is rewritten to include skin+rejection params after the route effect.
    await expect(page).toHaveURL(/\/job\/google-senior-frontend\?skin=.+&rejection=.+/)
    await expect(page.getByRole('button', { name: /apply now/i }).first()).toBeVisible()
    // Company link in the top row links back to the company page.
    await expect(page.getByRole('link', { name: 'Google', exact: true }).first()).toBeVisible()
  })

  test('Apply CTA opens an ATS skin form', async ({ page }) => {
    // Force a known skin so we can deterministically locate the form.
    await page.goto(`/job/${JOB_ID}?skin=talaeo&rejection=dev-null`)
    await page
      .getByRole('button', { name: /apply now/i })
      .first()
      .click()
    // Skin selector + form should be visible.
    await expect(page.locator('form').first()).toBeVisible()
    await expect(page.getByRole('button', { name: /submit application/i }).first()).toBeVisible()
  })

  test('company link navigates back to /company/:id', async ({ page }) => {
    await page.goto(`/job/${JOB_ID}?skin=talaeo&rejection=dev-null`)
    await page.getByRole('link', { name: 'Google', exact: true }).first().click()
    await expect(page).toHaveURL(/\/company\/google$/)
    await expect(page.getByRole('heading', { name: 'Google', exact: true }).first()).toBeVisible()
  })
})
