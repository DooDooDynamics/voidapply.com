// Stable test ids and helpers for locating elements across skins/rejections.
// Prefer adding `data-testid` to source rather than relying on text/CSS.

import type { Page, Locator } from '@playwright/test'

export const debugHeader = (page: Page) => page.locator('text=DEBUG').first()

export const rejectionSentinel = (page: Page, modeId: string): Locator =>
  page.getByText(`rejection: ${modeId}`)

export const skinHeaderSentinel = (page: Page, skinId: string): Locator =>
  page.getByText(`skin: ${skinId}`)

// Set the debug "then:" rejection select.
export async function setDebugRejection(page: Page, modeId: string) {
  const select = page.locator('select').first()
  await select.selectOption(modeId)
}
