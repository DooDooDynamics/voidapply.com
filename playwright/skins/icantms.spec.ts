import { test, expect } from '@playwright/test'
import { setDebugRejection, rejectionSentinel } from '../helpers/selectors'
import { fillSkinForm, submitForm } from '../helpers/formFillers'

test('skin icantms submits and lands on dev-null rejection', async ({ page }) => {
  test.setTimeout(60000)
  await page.goto('/debug/skin/icantms')
  await page.waitForLoadState('networkidle')
  await setDebugRejection(page, 'dev-null')
  // 9-step wizard with a 3s resume parsing delay on step 3.
  await fillSkinForm(page, 'icantms')
  await submitForm(page)
  await expect(page).toHaveURL(/\/debug\/rejection\/dev-null$/, { timeout: 15000 })
  await expect(rejectionSentinel(page, 'dev-null')).toBeVisible()
})
