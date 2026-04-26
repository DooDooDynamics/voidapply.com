// Per-skin form fillers. Each function fills the *required* fields on the
// given skin's form. The spec then calls submitForm() to advance.
import type { Page, Locator } from '@playwright/test'
import { mockApplicant } from './mockApplicant'

export type SkinFiller = (page: Page) => Promise<void>

// --- Skin fillers ----------------------------------------------------------

// WorkNight: 8-step wizard (0..7). Fill+advance steps 0..6, fill step 7
// (final review, no fields). Spec calls submitForm to fire onSubmit.
export const fillWorkNight: SkinFiller = async (page) => {
  for (let i = 0; i < 7; i++) {
    await fillAllRequiredGeneric(page)
    await clickNextOrSubmit(page)
    // Wait for the next step to render — heading "Final Review" or distinct.
    await page.waitForLoadState('domcontentloaded')
  }
  // On final review step now; no inputs to fill. Caller will submit.
}

export const fillGreenHouseOfPain: SkinFiller = async (page) => {
  await fillAllRequiredGeneric(page)
}

export const fillTalaeo: SkinFiller = async (page) => {
  await fillAllRequiredGeneric(page)
}

// LinkedOut: 7-step wizard (0..6). Fill+advance 0..5, fill step 6.
// Spec calls submitForm; that triggers a 3s toast → onSubmit.
export const fillLinkedOut: SkinFiller = async (page) => {
  for (let i = 0; i < 6; i++) {
    await fillAllRequiredGeneric(page)
    await clickNextOrSubmit(page)
  }
  // On step 6 (Submit step). Fill remaining (the optional select).
  await fillAllRequiredGeneric(page)
}

export const fillAshbyeHQ: SkinFiller = async (page) => {
  await fillAllRequiredGeneric(page)
}

// ByeBob: submit triggers 6-second delay before onSubmit.
export const fillByeBob: SkinFiller = async (page) => {
  await fillAllRequiredGeneric(page)
}

export const fillRejectable: SkinFiller = async (page) => {
  await fillAllRequiredGeneric(page)
}

// LeverToNowhere: long form with accordion (open by default).
export const fillLeverToNowhere: SkinFiller = async (page) => {
  await fillAllRequiredGeneric(page)
}

// BamBoom: submit triggers 1.5s axe animation before onSubmit.
export const fillBamBoom: SkinFiller = async (page) => {
  await fillAllRequiredGeneric(page)
}

// Teamfailor: must wait for ~3s countdown to unlock the form, then fill.
export const fillTeamfailor: SkinFiller = async (page) => {
  // Wait for "Unlocked!" badge to appear (form opacity-100 + pointer-events-auto).
  await page.getByText('Unlocked!', { exact: true }).waitFor({ timeout: 10000 })
  await fillAllRequiredGeneric(page)
}

// IcantMS: 9-step wizard. Step 3 has 3-second resume parse delay.
// Step 6 requires manually adding 3 skills via Add button.
export const fillIcantMS: SkinFiller = async (page) => {
  // Step 1: Account
  await fillAllRequiredGeneric(page)
  await clickIcantMSContinue(page)
  // Step 2: Personal
  await fillAllRequiredGeneric(page)
  await clickIcantMSContinue(page)
  // Step 3: Resume — clicking the file upload area triggers parsing (3s).
  // The FileUpload click is wired via parent onClick=handleResumeUpload.
  await page.getByText('Choose File').first().click()
  // Set the file via the underlying input.
  const fileInput = page.locator('input[type="file"]').first()
  await fileInput.setInputFiles({
    name: mockApplicant.resumeFileName,
    mimeType: 'application/pdf',
    buffer: mockApplicant.resumeFileBytes,
  })
  // Wait for parsing to complete and parsed fields to render.
  await page.getByText('AI parsing complete. 0 fields populated.').waitFor({ timeout: 10000 })
  await fillAllRequiredGeneric(page)
  await clickIcantMSContinue(page)
  // Step 4: Work Experience
  await fillAllRequiredGeneric(page)
  await clickIcantMSContinue(page)
  // Step 5: Education
  await fillAllRequiredGeneric(page)
  await clickIcantMSContinue(page)
  // Step 6: Skills — add 3 skills manually
  for (let i = 0; i < 3; i++) {
    await page.getByPlaceholder('e.g., Microsoft Excel').fill(`Skill ${i + 1}`)
    await page.getByRole('button', { name: 'Add', exact: true }).click()
  }
  await fillAllRequiredGeneric(page) // fill the certifications textarea
  await clickIcantMSContinue(page)
  // Step 7: Application Questions
  await fillAllRequiredGeneric(page)
  await clickIcantMSContinue(page)
  // Step 8: EEO
  await fillAllRequiredGeneric(page)
  await clickIcantMSContinue(page)
  // Step 9: E-Sign — check certify checkbox. Spec then calls submitForm.
  const certifyCheckbox = page.locator('input[type="checkbox"]').first()
  await certifyCheckbox.check()
}

// Note: fillIcantMS clicks "Save & Continue" 8 times to reach step 9.
// On step 9 the submit button text becomes "Submit Application" (still submit).

// DumbRecruiters: 2-second submit delay overlay.
export const fillDumbRecruiters: SkinFiller = async (page) => {
  await fillAllRequiredGeneric(page)
}

export const fillJobVoid: SkinFiller = async (page) => {
  await fillAllRequiredGeneric(page)
}

export const SKIN_FILLERS: Record<string, SkinFiller> = {
  worknight: fillWorkNight,
  'greenhouse-of-pain': fillGreenHouseOfPain,
  talaeo: fillTalaeo,
  'linked-out': fillLinkedOut,
  'ashbye-hq': fillAshbyeHQ,
  byebob: fillByeBob,
  rejectable: fillRejectable,
  'lever-to-nowhere': fillLeverToNowhere,
  bamboom: fillBamBoom,
  teamfailor: fillTeamfailor,
  icantms: fillIcantMS,
  'dumb-recruiters': fillDumbRecruiters,
  jobvoid: fillJobVoid,
}

export async function fillSkinForm(page: Page, skinId: string): Promise<void> {
  const filler = SKIN_FILLERS[skinId]
  if (!filler) throw new Error(`No filler registered for skin ${skinId}`)
  await filler(page)
}

// ---------------------------------------------------------------------------
// Generic best-effort filler: walks every required input/select/textarea in
// the form and supplies a sensible mock value.
// ---------------------------------------------------------------------------

export async function fillAllRequiredGeneric(page: Page): Promise<void> {
  const form = page.locator('form').first()
  await form.waitFor({ state: 'visible' })

  // Text-like inputs (visible)
  const inputs = form.locator(
    'input:not([type="hidden"]):not([type="submit"]):not([type="button"]):not([type="file"])'
  )
  const count = await inputs.count()
  for (let i = 0; i < count; i++) {
    const input = inputs.nth(i)
    if (!(await input.isVisible().catch(() => false))) continue
    if (await input.isDisabled().catch(() => false)) continue
    const type = (await input.getAttribute('type')) || 'text'
    const name = (await input.getAttribute('name')) || ''
    const placeholder = (await input.getAttribute('placeholder')) || ''
    const id = (await input.getAttribute('id')) || ''
    // Try also to read the preceding label's text for hinting.
    const labelText = await getLabelText(input).catch(() => '')
    const hint = `${name} ${placeholder} ${id} ${labelText}`.toLowerCase()

    try {
      if (type === 'checkbox') {
        if (!(await input.isChecked())) await input.check({ force: true })
      } else if (type === 'radio') {
        const radioName = name
        if (radioName) {
          const groupChecked = await form
            .locator(`input[type="radio"][name="${radioName}"]:checked`)
            .count()
          if (groupChecked === 0) await input.check({ force: true })
        } else {
          await input.check({ force: true })
        }
      } else if (type === 'email') {
        await input.fill(mockApplicant.email)
      } else if (type === 'tel') {
        await input.fill(mockApplicant.phone)
      } else if (type === 'url') {
        await input.fill(mockApplicant.linkedin)
      } else if (type === 'number') {
        await input.fill(
          hint.includes('salary') ? mockApplicant.salary : mockApplicant.yearsExperience
        )
      } else if (type === 'date') {
        await input.fill(mockApplicant.startDate)
      } else if (type === 'password') {
        await input.fill('Password1!')
      } else {
        await input.fill(pickValueForHint(hint))
      }
    } catch {
      // Skip non-fillable elements.
    }
  }

  // File inputs — they're sr-only/hidden but functionally fillable.
  const fileInputs = form.locator('input[type="file"]')
  const fCount = await fileInputs.count()
  for (let i = 0; i < fCount; i++) {
    const fileInput = fileInputs.nth(i)
    try {
      await fileInput.setInputFiles({
        name: mockApplicant.resumeFileName,
        mimeType: 'application/pdf',
        buffer: mockApplicant.resumeFileBytes,
      })
    } catch {
      // ignore
    }
  }

  // Selects — pick first non-empty option that doesn't disqualify.
  const selects = form.locator('select')
  const sCount = await selects.count()
  for (let i = 0; i < sCount; i++) {
    const select = selects.nth(i)
    if (!(await select.isVisible().catch(() => false))) continue
    if (await select.isDisabled().catch(() => false)) continue
    const options = select.locator('option')
    const oCount = await options.count()
    for (let j = 0; j < oCount; j++) {
      const value = await options.nth(j).getAttribute('value')
      if (value && value.trim() !== '') {
        await select.selectOption(value).catch(() => {})
        break
      }
    }
  }

  // Textareas
  const textareas = form.locator('textarea')
  const tCount = await textareas.count()
  for (let i = 0; i < tCount; i++) {
    const ta = textareas.nth(i)
    if (!(await ta.isVisible().catch(() => false))) continue
    await ta.fill(mockApplicant.coverLetter).catch(() => {})
  }
}

async function getLabelText(input: Locator): Promise<string> {
  // Try parent label.
  const text = await input
    .evaluate((el) => {
      // Walk up to the closest label or to a div with a label child.
      let cur: HTMLElement | null = el as HTMLElement
      for (let depth = 0; depth < 4 && cur; depth++) {
        if (cur.tagName === 'LABEL') return cur.textContent || ''
        const parent: HTMLElement | null = cur.parentElement
        if (!parent) break
        const label = parent.querySelector('label')
        if (label) return label.textContent || ''
        cur = parent
      }
      return ''
    })
    .catch(() => '')
  return text
}

function pickValueForHint(hint: string): string {
  if (hint.includes('email')) return mockApplicant.email
  if (hint.includes('phone') || hint.includes('tel') || hint.includes('fax'))
    return mockApplicant.phone
  if (hint.includes('linkedin')) return mockApplicant.linkedin
  if (hint.includes('github')) return mockApplicant.github
  if (hint.includes('portfolio') || hint.includes('website')) return mockApplicant.portfolio
  if (hint.includes('first')) return mockApplicant.firstName
  if (hint.includes('last') || hint.includes('surname')) return mockApplicant.lastName
  if (hint.includes('full')) return mockApplicant.fullName
  if (hint.includes('city')) return mockApplicant.city
  if (hint.includes('country')) return mockApplicant.country
  if (hint.includes('state') || hint.includes('province')) return 'CA'
  if (hint.includes('zip') || hint.includes('postal')) return mockApplicant.zip
  if (hint.includes('street') || hint.includes('address')) return mockApplicant.address
  if (hint.includes('salary')) return mockApplicant.salary
  if (hint.includes('gpa')) return '3.9'
  if (hint.includes('year') || hint.includes('experience')) return mockApplicant.yearsExperience
  if (hint.includes('graduation')) return '2020'
  if (
    hint.includes('cover') ||
    hint.includes('letter') ||
    hint.includes('why') ||
    hint.includes('about') ||
    hint.includes('describe')
  )
    return mockApplicant.coverLetter
  if (hint.includes('name')) return mockApplicant.fullName
  return mockApplicant.fullName
}

// Click the form's submit button (advances multi-step wizards too).
export async function submitForm(page: Page): Promise<void> {
  const form = page.locator('form').first()
  const submit = form.locator('button[type="submit"], input[type="submit"]').first()
  if (await submit.count()) {
    await submit.click()
    return
  }
  const button = form
    .getByRole('button', { name: /submit|apply|send|finish|complete|continue|next/i })
    .last()
  await button.click()
}

// Click submit but don't expect navigation — for advancing wizard steps.
async function clickNextOrSubmit(page: Page): Promise<void> {
  const form = page.locator('form').first()
  const submit = form.locator('button[type="submit"]').first()
  await submit.click()
}

async function clickIcantMSContinue(page: Page): Promise<void> {
  const form = page.locator('form').first()
  await form.getByRole('button', { name: /Save & Continue/i }).click()
}
