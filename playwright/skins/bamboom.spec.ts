import { test, expect } from '@playwright/test'
import { setDebugRejection, rejectionSentinel } from '../helpers/selectors'
import { fillSkinForm, submitForm } from '../helpers/formFillers'

test('skin bamboom submits and lands on dev-null rejection', async ({ page }) => {
  await page.goto('/debug/skin/bamboom')
  await page.waitForLoadState('networkidle')
  await setDebugRejection(page, 'dev-null')
  await fillSkinForm(page, 'bamboom')
  await submitForm(page)
  // BamBoom has a 1.5-second axe animation delay before navigating.
  await expect(page).toHaveURL(/\/debug\/rejection\/dev-null$/, { timeout: 15000 })
  await expect(rejectionSentinel(page, 'dev-null')).toBeVisible()
})
