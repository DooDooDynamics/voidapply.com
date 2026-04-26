import { test, expect } from '@playwright/test'
import { setDebugRejection, rejectionSentinel } from '../helpers/selectors'
import { fillSkinForm, submitForm } from '../helpers/formFillers'

test('skin dumb-recruiters submits and lands on dev-null rejection', async ({ page }) => {
  await page.goto('/debug/skin/dumb-recruiters')
  await page.waitForLoadState('networkidle')
  await setDebugRejection(page, 'dev-null')
  await fillSkinForm(page, 'dumb-recruiters')
  await submitForm(page)
  // DumbRecruiters has a 2-second AI overlay before navigating.
  await expect(page).toHaveURL(/\/debug\/rejection\/dev-null$/, { timeout: 15000 })
  await expect(rejectionSentinel(page, 'dev-null')).toBeVisible()
})
