import { test, expect } from '@playwright/test'
import { setDebugRejection, rejectionSentinel } from '../helpers/selectors'
import { fillSkinForm, submitForm } from '../helpers/formFillers'

test('skin ashbye-hq submits and lands on dev-null rejection', async ({ page }) => {
  await page.goto('/debug/skin/ashbye-hq')
  await page.waitForLoadState('networkidle')
  await setDebugRejection(page, 'dev-null')
  await fillSkinForm(page, 'ashbye-hq')
  await submitForm(page)
  await expect(page).toHaveURL(/\/debug\/rejection\/dev-null$/, { timeout: 15000 })
  await expect(rejectionSentinel(page, 'dev-null')).toBeVisible()
})
