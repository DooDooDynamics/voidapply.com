import { test, expect } from '@playwright/test'
import { rejectionSentinel } from '../helpers/selectors'

test('rejection assessment-gauntlet walks all 6 stages and rejects', async ({ page }) => {
  test.setTimeout(60000)
  await page.goto('/debug/rejection/assessment-gauntlet')
  await page.waitForLoadState('networkidle')

  await expect(rejectionSentinel(page, 'assessment-gauntlet')).toBeVisible()

  // Initial: redirect screen
  await expect(page.getByText(/Redirecting to PyMetrix/i)).toBeVisible({ timeout: 10000 })

  // Stages auto-advance via internal timers; verify each stage label appears
  await expect(page.getByText('Step 1 of 6 — Cognitive Assessment')).toBeVisible({ timeout: 30000 })
  await expect(page.getByText('Step 2 of 6 — Personality Questionnaire')).toBeVisible({
    timeout: 30000,
  })
  await expect(page.getByText('Step 3 of 6 — Abstract Reasoning')).toBeVisible({ timeout: 30000 })
  await expect(page.getByText('Step 4 of 6 — Video Interview')).toBeVisible({ timeout: 30000 })
  await expect(page.getByText('Step 5 of 6 — Work Simulation')).toBeVisible({ timeout: 30000 })
  await expect(page.getByText('Step 6 of 6 — Reference Check')).toBeVisible({ timeout: 30000 })

  // Final auto-rejection
  await expect(page.getByRole('heading', { name: 'Not a Match' })).toBeVisible({ timeout: 30000 })
  await expect(page.getByText(/AI-powered screening has determined/)).toBeVisible({
    timeout: 30000,
  })
  await expect(page.getByText('Match percentage:')).toBeVisible({ timeout: 30000 })
})
