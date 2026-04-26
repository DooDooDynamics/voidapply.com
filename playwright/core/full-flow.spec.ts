import { test, expect } from '@playwright/test'
import { fillAllRequiredGeneric } from '../helpers/formFillers'

// End-to-end happy path:
//   home (/) → search (/search?q=Google) → job (/job/google-senior-frontend)
//   → apply (Talaeo skin) → dev-null rejection → terminal "Application Complete".
//
// Talaeo + dev-null are stable: Talaeo is a single-page form (every required
// field is rendered up front) and dev-null prints a terminal animation that
// finishes with `onComplete()`. We pin both via the URL query params that
// JobPage reads.

test.describe('full flow: home → search → job → apply → rejection', () => {
  test('reaches dev-null terminal state', async ({ page }) => {
    // 1. Home — search for "Google".
    await page.goto('/')
    await page
      .getByPlaceholder(/search by job title/i)
      .first()
      .fill('Google')
    await page.getByRole('button', { name: 'Search' }).first().click()
    await expect(page).toHaveURL(/\/search\?q=Google/)

    // 2. Pick the first job result and navigate to it directly with
    //    deterministic skin + rejection params. (Search uses fuzzy matching,
    //    so the result set is not guaranteed to be Google-specific.)
    const jobLink = page.locator('a[href^="/job/"]').first()
    await expect(jobLink).toBeVisible()
    const href = await jobLink.getAttribute('href')
    await page.goto(`${href}?skin=talaeo&rejection=dev-null`)
    await expect(page).toHaveURL(/skin=talaeo&rejection=dev-null/)

    // 3. Click Apply Now and wait for the Talaeo form to render.
    const applyBtn = page.getByRole('button', { name: /apply now/i }).first()
    await expect(applyBtn).toBeVisible()
    await applyBtn.click()
    await expect(page.getByRole('button', { name: /submit application/i }).first()).toBeVisible()

    // 4. Fill the Talaeo form using the generic filler (all required fields).
    await fillAllRequiredGeneric(page)

    // 5. Submit the application.
    await page
      .getByRole('button', { name: /submit application/i })
      .first()
      .click()

    // 6. Dev-null rejection animates terminal lines, then onComplete fires
    //    after ~3s. Wait for the final "Application Complete" page.
    await expect(
      page.getByText(/your application has been piped to \/dev\/null/i).first()
    ).toBeVisible({ timeout: 15000 })

    // Terminal application-complete state.
    await expect(page.getByRole('heading', { name: /application complete/i }).first()).toBeVisible({
      timeout: 15000,
    })
    await expect(page.getByText(/has been thoroughly rejected/i).first()).toBeVisible()
    await expect(page.getByRole('link', { name: /apply to another job/i }).first()).toBeVisible()
  })
})
