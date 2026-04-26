# voidapply.com — E2E Testing Plan

A plan to grow the existing Playwright suite from smoke tests (route renders) into
real **user-flow E2Es** that fill out each ATS skin form, observe the resulting
rejection mode, and exercise core site navigation.

The current suite ([playwright/smoke.spec.ts](playwright/smoke.spec.ts)) only
verifies that the `/debug/skin/:id` and `/debug/rejection/:id` routes render.
This plan replaces the "renders" bar with **interactive flows** that fill
inputs, submit forms, and assert observable rejection behaviour.

---

## 1. Inventory

### 1.1 ATS Skins (13)

Source: [src/data/skins.ts](src/data/skins.ts), registry in
[src/debug/DebugSkinPage.tsx](src/debug/DebugSkinPage.tsx).

| id                   | Component        | File                                                                                   |
| -------------------- | ---------------- | -------------------------------------------------------------------------------------- |
| `worknight`          | WorkNight        | [src/components/skins/WorkNight.tsx](src/components/skins/WorkNight.tsx)               |
| `greenhouse-of-pain` | GreenHouseOfPain | [src/components/skins/GreenHouseOfPain.tsx](src/components/skins/GreenHouseOfPain.tsx) |
| `talaeo`             | Talaeo           | [src/components/skins/Talaeo.tsx](src/components/skins/Talaeo.tsx)                     |
| `linked-out`         | LinkedOut        | [src/components/skins/LinkedOut.tsx](src/components/skins/LinkedOut.tsx)               |
| `ashbye-hq`          | AshbyeHQ         | [src/components/skins/AshbyeHQ.tsx](src/components/skins/AshbyeHQ.tsx)                 |
| `byebob`             | ByeBob           | [src/components/skins/ByeBob.tsx](src/components/skins/ByeBob.tsx)                     |
| `rejectable`         | Rejectable       | [src/components/skins/Rejectable.tsx](src/components/skins/Rejectable.tsx)             |
| `lever-to-nowhere`   | LeverToNowhere   | [src/components/skins/LeverToNowhere.tsx](src/components/skins/LeverToNowhere.tsx)     |
| `bamboom`            | BamBoom          | [src/components/skins/BamBoom.tsx](src/components/skins/BamBoom.tsx)                   |
| `teamfailor`         | Teamfailor       | [src/components/skins/Teamfailor.tsx](src/components/skins/Teamfailor.tsx)             |
| `icantms`            | IcantMS          | [src/components/skins/IcantMS.tsx](src/components/skins/IcantMS.tsx)                   |
| `dumb-recruiters`    | DumbRecruiters   | [src/components/skins/DumbRecruiters.tsx](src/components/skins/DumbRecruiters.tsx)     |
| `jobvoid`            | JobVoid          | [src/components/skins/JobVoid.tsx](src/components/skins/JobVoid.tsx)                   |

### 1.2 Rejection Modes (11)

Source: [src/data/rejectionModes.ts](src/data/rejectionModes.ts), registry in
[src/debug/DebugRejectionPage.tsx](src/debug/DebugRejectionPage.tsx).

Generic (skin-agnostic): `dev-null`, `ghost`, `speedrun`, `shredder`, `black-hole`, `assessment-gauntlet`
Personalized: `fake-email`, `ats-score`, `interview-then-ghost`, `culture-fit`, `phantom-offer`

### 1.3 Core site routes

From [src/App.tsx](src/App.tsx):
`/`, `/search`, `/job/:jobId`, `/company/:companyId`, `/debug`, `*` (NotFound).

---

## 2. Test Matrix

| #   | Spec file                                   | Type                 | Cases | Goal                                                                                                     |
| --- | ------------------------------------------- | -------------------- | ----- | -------------------------------------------------------------------------------------------------------- |
| 1   | `playwright/skins/<skin>.spec.ts` × 13      | Skin happy path      | 13    | Fill every required field and submit; assert navigation to chosen rejection mode.                        |
| 2   | `playwright/rejections/<mode>.spec.ts` × 11 | Rejection happy path | 11    | Drive each mode from start to terminal state; assert key intermediate + final UI.                        |
| 3   | `playwright/core/home.spec.ts`              | Home                 | 1     | Hero renders, featured jobs/companies link out correctly, theme toggle works.                            |
| 4   | `playwright/core/search.spec.ts`            | Search               | 1     | Type query in header, submit, lands on `/search?q=…`, shows result list, empty-state for nonsense query. |
| 5   | `playwright/core/job.spec.ts`               | Job page             | 1     | Direct nav to a known `/job/:jobId`, apply CTA opens skin, breadcrumb back to company.                   |
| 6   | `playwright/core/company.spec.ts`           | Company page         | 1     | `/company/:companyId` shows company info + jobs list; click into a job.                                  |
| 7   | `playwright/core/navigation.spec.ts`        | Navigation           | 1     | Layout header/footer links work; 404 page on bogus route.                                                |
| 8   | `playwright/core/full-flow.spec.ts`         | End-to-end           | 1     | Search → job → apply (real skin) → rejection terminal state, all from `/`.                               |
| 9   | `playwright/smoke.spec.ts`                  | Smoke (keep)         | 24    | Keep as cheap regression net.                                                                            |

**Total new specs:** 13 skins + 11 rejections + 6 core = **30 new spec files**.

---

## 3. Per-spec acceptance criteria

### 3.1 Skin specs (`playwright/skins/<skin>.spec.ts`)

Each must:

1. Navigate to `/debug/skin/<skin-id>`.
2. Set the debug rejection select to a stable choice (default: `dev-null`,
   except where the spec asserts something else).
3. Fill **every required field** the form actually exposes — text, selects,
   radios, file inputs, multi-step wizards, etc. Use realistic mock values
   (name, email, etc).
4. Submit the form (button copy varies per skin — find it by role/name, not by
   visual selector).
5. Assert URL changes to `/debug/rejection/<chosen-mode>` AND a sentinel of the
   rejection UI appears.
6. Run in both `chromium` and `chromium-dark` projects (already configured).

Special behaviours to handle (read the component before writing):

- **WorkNight**: many gratuitous fields, possibly multi-page.
- **LeverToNowhere**: deceptively short → long form, expect step transitions.
- **Teamfailor**: culture video step.
- **AssessmentGauntlet** as the next-mode is not a skin but pairs cleanly.
- **GreenHouseOfPain / iCan'tMS / DumbRecruiters**: AI-screening simulation
  may have artificial delays; use `waitFor` not `waitForTimeout`.

### 3.2 Rejection specs (`playwright/rejections/<mode>.spec.ts`)

Each must:

1. Navigate to `/debug/rejection/<mode-id>` directly (skips form fill).
2. Assert the **initial visual state** (e.g. shredder shows paper, ghost shows
   nothing for a beat, speedrun begins counting).
3. Drive any user interactions the mode requires (e.g. assessment-gauntlet
   has 6 stages — click through them; phantom-offer has a countdown to dismiss).
4. Wait for the **terminal state** with explicit selectors, not arbitrary
   sleeps. Use `expect.poll` or `toBeVisible({ timeout })` for animated modes.
5. Assert mode-specific copy appears (e.g. fake-email shows the rejection
   email body; culture-fit shows the 2-sentence email).
6. For modes with `onComplete` navigation, assert it eventually fires when
   applicable.

Mode-specific notes:

- `dev-null`: blank screen with `/dev/null` text.
- `ghost`: assert nothing happens for ~3s, then sentinel.
- `speedrun`: assert the timer renders and stops; rejection copy appears.
- `shredder`: animation runs to end; "shredded" state present.
- `black-hole`: event-horizon animation; final "no escape" copy.
- `assessment-gauntlet`: walk all 6 stages; final auto-rejection text.
- `fake-email`: assert From/Subject/Body fields contain mock company name.
- `ats-score`: numeric score animates down; final score < threshold.
- `interview-then-ghost`: 4 stages (Phone, Technical, Final, Offer) → blank.
- `culture-fit`: "Offer pending" → 2-sentence email.
- `phantom-offer`: verbal offer → countdown to Friday → rescission email.

### 3.3 Core specs

- `home.spec.ts`: featured items rendered from
  [src/data/companies.ts](src/data/companies.ts) and [src/data/jobs/](src/data/jobs/).
- `search.spec.ts`: header search → `/search?q=…`. Assert at least one result
  for a known company name, empty-state for `qqqzzz`.
- `job.spec.ts`: pick a real jobId from data, navigate, click Apply CTA,
  expect a skin route or modal.
- `company.spec.ts`: pick a real companyId, assert listing + click into a job.
- `navigation.spec.ts`: header logo → `/`, footer links present, `/whatever`
  → NotFoundPage sentinel.
- `full-flow.spec.ts`: home → search → job → apply → rejection. Uses real
  application path, not `/debug`.

---

## 4. Conventions

- **Location:** mirror current `playwright/` flat layout; group new specs into
  `playwright/skins/`, `playwright/rejections/`, `playwright/core/`. Update
  [playwright.config.ts](playwright.config.ts) `testMatch` to `**/*.spec.ts` if
  needed (currently `**/*.ts`, which would pick up helpers — see §5).
- **Helpers:** create `playwright/helpers/`:
  - `formFillers.ts` — one `fillSkinForm(page, skinId)` function with a switch
    per skin so the spec stays terse.
  - `selectors.ts` — stable test ids; if components lack them, add `data-testid`
    in source rather than relying on text/CSS.
  - `mockApplicant.ts` — single mock applicant object reused across specs.
- **No arbitrary sleeps.** Use `await expect(locator).toBeVisible()` with
  generous timeouts for animated states.
- **Both color schemes** run automatically via existing projects.
- **Snapshots / screenshots:** keep `screenshot: 'only-on-failure'` (already
  set). Do not introduce visual regression yet — out of scope.
- **Dev-only routes:** confirm `/debug/*` works in `npm run dev` (config uses
  vite dev server on port 5174). If `/debug` is gated on dev, leave skin/
  rejection specs hitting it; the core specs hit production routes.

---

## 5. Pre-flight cleanup (before writing specs)

1. Tighten `testMatch` in [playwright.config.ts](playwright.config.ts) to
   `**/*.spec.ts` so helper files in `playwright/helpers/` aren't executed.
2. Add `data-testid` attributes where skin/rejection components have ambiguous
   text or rely on visuals (e.g. final rejection sentinel). Coordinate via
   one PR per skin to keep diffs reviewable.
3. Confirm mock data in [src/debug/mockData.ts](src/debug/mockData.ts) is
   stable and reused as canonical for assertions.

---

## 6. Orchestration plan (subagents)

The work fans out cleanly. The **main orchestrator** (this conversation) does
the planning, helper scaffolding, and integration. **Subagents** do the
per-spec implementation in parallel.

### Phase 0 — Orchestrator (sequential, do first)

- Apply §5 pre-flight cleanup.
- Write `playwright/helpers/mockApplicant.ts`, `formFillers.ts` skeleton (with
  `TODO` per skin), `selectors.ts`.
- Add `data-testid` to rejection components for terminal-state sentinels.
- Land this as one commit so subagents work on stable ground.

### Phase 1 — Skin specs (parallel, 13 subagents)

For each skin id, spawn one `general-purpose` subagent with a self-contained
prompt. Template:

> Write `playwright/skins/<skin-id>.spec.ts`. Read
> `src/components/skins/<Component>.tsx` and discover every required form
> field. Import the mock applicant from `playwright/helpers/mockApplicant.ts`.
> Test must: (1) goto `/debug/skin/<skin-id>`, (2) set debug rejection select
> to `dev-null`, (3) fill all required fields with mock data, (4) submit,
> (5) assert URL becomes `/debug/rejection/dev-null` and the dev-null sentinel
> is visible. Also implement `fillSkinForm` for this skin in
> `playwright/helpers/formFillers.ts`. Run `npx playwright test
playwright/skins/<skin-id>.spec.ts` and iterate until green in both
> projects. Report pass/fail and any `data-testid`s you had to add.

Run in **batches of 4** to avoid devserver port contention (each Playwright
run starts its own webServer per [playwright.config.ts](playwright.config.ts)).
Either:

- (a) Switch `reuseExistingServer: true` and start one dev server up-front, or
- (b) Run subagents serially — slower but no contention.

Recommendation: do (a) as part of Phase 0.

### Phase 2 — Rejection specs (parallel, 11 subagents)

Same pattern, prompt template:

> Write `playwright/rejections/<mode-id>.spec.ts`. Read
> `src/components/rejections/<Component>.tsx`. Test must: goto
> `/debug/rejection/<mode-id>`, drive any required interactions, wait for
> terminal state using explicit selectors (no `waitForTimeout`), and assert
> mode-specific copy from §3.2 of TESTING_PLAN.md. Add `data-testid`s in the
> component if the existing DOM is too ambiguous. Run the spec in both
> projects and iterate until green.

### Phase 3 — Core specs (parallel, 6 subagents)

One subagent per core spec (§3.3). Prompts include the user flow to simulate
and the assertions required.

### Phase 4 — Integration (orchestrator)

- Run full suite: `npx playwright test`.
- Triage flakes: rerun three times, mark any consistently flaky spec for
  follow-up.
- Update `package.json` scripts:
  - `test:e2e` → full run
  - `test:e2e:smoke` → only `playwright/smoke.spec.ts`
  - `test:e2e:skins`, `test:e2e:rejections`, `test:e2e:core`
- Document the suite layout in [CONTRIBUTING.md](CONTRIBUTING.md).

### Verification subagent

After each Phase, spawn one `Explore` subagent to **independently verify**:

> Read every new spec under `playwright/<phase-dir>/`. For each, confirm it
> (a) actually fills inputs (not just clicks submit on an empty form), (b) has
> at least one assertion beyond URL, (c) does not contain `waitForTimeout` or
> arbitrary sleeps. Report any spec that fails these checks.

Do not skip this — author subagents will sometimes write specs that pass for
the wrong reason (e.g. `expect(true).toBe(true)` after a navigation).

---

## 7. Out of scope

- Visual regression / screenshot diffing.
- Mobile viewports (only Desktop Chrome configured).
- Accessibility audits (separate effort).
- Performance budgets.
- CI wiring (cover in a follow-up once the suite stabilises).

---

## 8. Done = ?

- 30 new spec files exist and pass on `chromium` and `chromium-dark`.
- Existing `smoke.spec.ts` still passes.
- No spec uses `waitForTimeout` or hardcoded sleeps > 100ms.
- `npm run test:e2e` green locally end-to-end in under ~5 minutes.
- Verification subagent reports no false-positive specs.
