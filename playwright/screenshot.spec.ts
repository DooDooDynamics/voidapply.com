import { test, expect } from '@playwright/test'
import path from 'path'
import fs from 'fs'

const ALL_SKINS = [
  'worknight',
  'greenhouse-of-pain',
  'talaeo',
  'linked-out',
  'ashbye-hq',
  'byebob',
  'rejectable',
  'lever-to-nowhere',
  'bamboom',
  'teamfailor',
  'icantms',
  'dumb-recruiters',
  'jobvoid',
]

const ALL_REJECTIONS = [
  'dev-null',
  'ghost',
  'speedrun',
  'fake-email',
  'ats-score',
  'shredder',
  'black-hole',
  'assessment-gauntlet',
  'culture-fit',
  'interview-then-ghost',
  'phantom-offer',
]

function getTargets() {
  const skinArg = process.env.SKIN
  const rejectionArg = process.env.REJECTION

  const skins = skinArg ? [skinArg] : []
  const rejections = rejectionArg ? [rejectionArg] : []

  if (!skinArg && !rejectionArg) {
    return { skins: ALL_SKINS, rejections: ALL_REJECTIONS }
  }

  return { skins, rejections }
}

const { skins, rejections } = getTargets()

for (const skinId of skins) {
  test(`screenshot skin: ${skinId}`, async ({ page }, testInfo) => {
    const themeDir = testInfo.project.name === 'chromium-dark' ? 'dark' : 'light'

    await page.goto(`/debug/skin/${skinId}`)
    await page.waitForLoadState('networkidle')
    await page.waitForTimeout(2000)

    const screenshotDir = path.join('playwright', 'screenshots', themeDir)
    fs.mkdirSync(screenshotDir, { recursive: true })
    await page.screenshot({
      path: path.join(screenshotDir, `${skinId}.png`),
      fullPage: true,
    })

    // Verify a form element is present
    await expect(page.locator('form')).toBeVisible()
  })
}

for (const rejectionId of rejections) {
  test(`screenshot rejection: ${rejectionId}`, async ({ page }, testInfo) => {
    const themeDir = testInfo.project.name === 'chromium-dark' ? 'dark' : 'light'

    await page.goto(`/debug/rejection/${rejectionId}`)
    await page.waitForLoadState('networkidle')
    await page.waitForTimeout(2000)

    const screenshotDir = path.join('playwright', 'screenshots', themeDir)
    fs.mkdirSync(screenshotDir, { recursive: true })
    await page.screenshot({
      path: path.join(screenshotDir, `rejection-${rejectionId}.png`),
      fullPage: true,
    })
  })
}
