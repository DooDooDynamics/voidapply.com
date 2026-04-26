# Contributing to this project

The easiest ways to contribute are by fixing bugs and optimizing some of the code. I make no claims that the code here is flawless, I did this all in half a night of frustration.

That being said, there are some legitimate ways to contribute:

- Add new job descriptions, it's as simple as editing the corresponding typescript files (such as engineering.ts)
- Add new ATS skins
- Add new rejection modes

I'll keep things simple for now, just open a PR and if it makes sense, it gets merged!

## End-to-end tests

Playwright suite layout under `playwright/`:

- `smoke.spec.ts` — cheap regression net (route renders).
- `skins/<skin-id>.spec.ts` — fills each skin's form, asserts navigation to the chosen rejection mode.
- `rejections/<mode-id>.spec.ts` — drives each rejection mode to its terminal state.
- `core/*.spec.ts` — home, search, job, company, navigation, and a full home-to-rejection flow.
- `helpers/` — `mockApplicant`, `formFillers`, `selectors`. Excluded by `testMatch: '**/*.spec.ts'`.
- `screenshot.spec.ts` — tooling for `npm run screenshot*`; excluded from `npm run test:e2e` via `--grep-invert`.

Scripts:

- `npm run test:e2e` — full suite (skins + rejections + core + smoke).
- `npm run test:e2e:smoke` / `:skins` / `:rejections` / `:core` — focused subsets.

Both `chromium` and `chromium-dark` projects run automatically. New specs must avoid `waitForTimeout` and assert beyond URL changes.
