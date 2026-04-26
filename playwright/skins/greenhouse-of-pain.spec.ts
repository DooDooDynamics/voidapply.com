import { test, expect } from '@playwright/test'
import { setDebugRejection, rejectionSentinel } from '../helpers/selectors'
import { fillSkinForm, submitForm } from '../helpers/formFillers'

test('skin greenhouse-of-pain submits and lands on dev-null rejection', async ({ page }) => {
  await page.goto('/debug/skin/greenhouse-of-pain')
  await page.waitForLoadState('networkidle')
  await setDebugRejection(page, 'dev-null')
  await fillSkinForm(page, 'greenhouse-of-pain')
  await submitForm(page)
  await expect(page).toHaveURL(/\/debug\/rejection\/dev-null$/, { timeout: 15000 })
  await expect(rejectionSentinel(page, 'dev-null')).toBeVisible()
})
