# VoidApply — Project Spec

> **voidapply.com** — "Apply faster than ever. Right to the void."
>
> A satirical static website that clones common job application UIs, lets users fill them out, then comedically destroys their application. Built as a love letter to everyone who's applied to 200 jobs and heard back from 3.

---

## Tech Stack & Conventions

- **Vite + React 18 + TypeScript** (strict mode)
- **React Router v6** with **HashRouter** (GitHub Pages, Actions deploy)
- **Tailwind CSS v3**
- **Framer Motion** for rejection animations and page transitions
- **Fuse.js** for client-side fuzzy search
- **Vitest + React Testing Library** for tests
- No backend. No APIs. Pure static SPA. Data is TypeScript modules bundled at build time.
- Deploy to **GitHub Pages**. `public/CNAME` contains `voidapply.com`. Vite base path is `/`.

### Code Style Rules

This is a joke site, but the code is not a joke. Follow these throughout:

- **Prefer `type` over `interface`** everywhere. Only use `interface` when declaration merging is genuinely needed.
- **Proper component splitting.** No god components. Each ATS skin, rejection mode, and page is its own module. Shared form fields (text input, textarea, file upload, select) are reusable components.
- **Code-split rejection modes and ATS skins** with `React.lazy` + `Suspense`. The user only ever sees one skin and one mode per page load — don't bundle them all eagerly.
- **State management:** React state + URL query params. No external state library. The URL is the source of truth for which job, skin, and rejection mode are active.
- **Repository pattern** for the data layer. Define repository types (`JobRepository`, `CompanyRepository`) with methods like `searchJobs`, `getJob`, `getJobsByCompany`, etc. Implement them with a static version that reads from the TypeScript data modules. This makes future migration to client-server trivial — swap the implementation, keep the types.
- **Data files grouped by job category:** `src/data/jobs/engineering.ts`, `src/data/jobs/marketing.ts`, etc. A barrel `index.ts` merges all categories and builds the Fuse.js search index.
- Clean imports, no barrel re-exports of everything, no circular dependencies.

---

## Data Model

Derive clean types during implementation but respect these domain relationships and constraints:

### Companies

Real Fortune 500 names: Google, Amazon, JPMorgan Chase, Meta, Apple, Microsoft, Goldman Sachs, Netflix, Deloitte, McKinsey. Each company has an id (slug), name, industry, a satirical tagline, headquarters, and employee count. Company logos are NOT image files — they're generated deterministically from the company ID at render time (see Logo Generation below).

### Job Listings

Each job belongs to a company and a category (`engineering`, `product`, `design`, `marketing`, `finance`, `operations`, `data-science`, `management`). A job has the standard fields: title, location, salary (as display string), type, posted date, description, requirements, and nice-to-haves.

**Critical constraint — rejection mode support:** Each job has a list of which rejection modes it supports, and a map of rejection content keyed by mode ID. This is the core architectural decision:

- **Generic modes** (dev-null, shredder, black-hole, ghost, speedrun) need NO per-job content. The animation itself is the joke. Every job supports these automatically.
- **Personalized modes** (fake-email, ats-score, interview-then-ghost) need per-job content (custom email text, custom ATS score categories, custom interview stages). A job only appears to support these modes in the UI if it has the corresponding content.

The rejection mode dropdown in the top bar reads the job's supported modes and only shows valid options. This prevents users from selecting a personalized mode for a job that has no content for it.

### ATS Skins

A registry of available skins. Each has an id (slug), a parody display name, a tagline, and an accent colour. The skin ID appears in the URL as a query param (`?skin=worknight`).

### Rejection Modes

A registry of available modes. Each has an id (slug), display name, description, and a flag for whether it's generic or requires per-job content. The mode ID appears in the URL as a query param (`?rejection=dev-null`).

---

## Logo Generation

A pure function that takes a company ID string and returns inline SVG JSX. Deterministic: same ID always produces the same logo.

- Hash the ID to derive: hue, shape variant (circle, rounded square, geometric overlap, letter-in-shape), and layout
- Colours: desaturated corporate palette — muted teals, navys, slate greys, dusty purples
- Include the company's initials as text
- The aesthetic is deliberately soulless and minimalist — the kind of logo a VC-backed startup would commission for $50k

---

## Routing

| Route                                           | Page              | Notes                                        |
| ----------------------------------------------- | ----------------- | -------------------------------------------- |
| `/`                                             | HomePage          | Landing hero + search bar                    |
| `/search?q={query}`                             | SearchResultsPage | Job listing results                          |
| `/job/{jobId}`                                  | JobPage           | Detail view → application form               |
| `/job/{jobId}?skin={skinId}&rejection={modeId}` | JobPage           | Active application with selected skin + mode |
| `/company/{companyId}`                          | CompanyPage       | Company profile + their listings             |
| `*`                                             | NotFoundPage      | "This page has been rejected"                |

When landing on `/job/{jobId}` without query params, randomly assign a skin and mode, then `replace` (not push) the URL with the selected values. Dropdown changes update query params.

---

## Pages

### HomePage (`/`)

Looks like a real job board at first glance. The satire is in the copy, not the design.

- Hero: "Find Your Next Rejection" / "Apply to top companies. Get ghosted by the best."
- Centered search bar
- Fake stats bar: "10,000+ jobs posted · 0 responses · ∞ ghostings"
- Featured companies row with generated SVG logos
- "How it Works" section: "1. Find a job → 2. Apply carefully → 3. Get instantly rejected"
- Footer: "© 2026 VoidApply Inc. All applications discarded." with GitHub link and "Built with frustration" badge

### SearchResultsPage (`/search?q={query}`)

Job board results layout. Cards showing: company logo, title, company name, location, salary, posted date. Click → job page.

### JobPage (`/job/{jobId}`)

**Pre-apply state:** Job description (left) + company card with "Apply Now" CTA (right).
**Post-apply state:** The selected ATS skin renders its form. Top bar shows skin + rejection mode dropdowns. Submit triggers the rejection.

### CompanyPage (`/company/{companyId}`)

Company header with generated logo, info, satirical "About" blurb ("At {Company}, we believe in moving fast and rejecting faster."). Lists all their open positions.

### NotFoundPage

"404 — Application Not Found. Much like your real applications, this page has disappeared into the void."

---

## ATS Skins

Each skin is a lazy-loaded React component. Same props contract: receives the job, company, and an `onSubmit` callback. All form inputs are controlled but the data goes nowhere — `onSubmit` just triggers the rejection mode.

### WorkNight™ (`worknight`) — Workday parody

- Navy + orange. Multi-step wizard with an absurd number of steps (8+) for a simple application.
- Step 1: Create account. Step 2: Upload CV. Step 3: Now re-enter everything from your CV manually. Step 4: Personality questions. Etc.
- Progress bar feels painfully slow. Each step has few fields but there are SO MANY steps.

### GreenHouse of Pain™ (`greenhouse-of-pain`) — Greenhouse parody

- Green + white, polished modern look. Single long scrolling form.
- Fake "We use AI to screen applications" badge in the corner.
- Absurd field: "On a scale of 1-10, how passionate are you about {company}'s mission? (Answers below 9 are automatically rejected)"

### Rejectable™ (`rejectable`) — Workable parody

- Teal/cyan, rounded corners, friendly-looking. Card-based form sections.
- Fake chat widget: "Typically replies in 3-5 business lifetimes."

### Talaeo™ (`talaeo`) — Taleo/Oracle parody

- Red + grey. Deliberately dated, ugly early-2010s enterprise UI. Misaligned fields. Random required asterisks.
- Fake session timeout banner counting down from 15 minutes.

### Lever to Nowhere™ (`lever-to-nowhere`) — Lever parody

- Purple accent, very clean and minimal. Short form — deceptively simple.
- After filling everything out, a new "Additional Information" section unfolds with 15 more fields.

---

## Rejection Modes

Each mode is a lazy-loaded full-screen takeover component. After the animation, show a completion state with "Apply to Another Job" and a shareable URL.

### Generic Modes (work with any job, no custom content needed)

**`dev-null`** — Terminal window drops down. Typewriter effect: `$ cat application.pdf | review --thorough | /dev/null`. Then: "Your application has been piped to /dev/null. This is the most efficient rejection pipeline in the industry."

**`shredder`** — Form shrinks to a document, scrolls upward into an animated paper shredder. Strips fall as CSS confetti. "Your application has been shredded. For the environment, we've recycled it into another company's job listing."

**`black-hole`** — Form gets sucked into a gravitational singularity at screen center (scale + rotate + opacity). A black circle grows. Text orbits then gets consumed. "Your application has crossed the event horizon."

**`ghost`** — The most realistic mode. Submit button shows a spinner for 5 seconds. Then... nothing. Page sits there. After 10s, faint grey text: "(This is the most realistic rejection mode)". After 15s: "Status: Under Review (since 2024)".

**`speedrun`** — Timer starts on submit click. Giant "REJECTED" stamp after 0.003 seconds. Shows a leaderboard of fake records. "Amazon — 0.002s (WR)".

### Personalized Modes (need per-job rejection content)

**`fake-email`** — Screen transitions to a Gmail-esque inbox. Loading state, then a rejection email arrives from the company. Personalized subject, body, the works. Below the email: "We'll keep your CV on file" with a countdown: "Time on file: 4...3...2...1...0. Deleted."

**`ats-score`** — Dashboard showing "AI Screening Results". Animated score gauge sweeping to some terrible number (2-15 / 100). Category breakdown with per-job snarky comments: "Buzzword Density: 3/100 — Did not mention 'synergy' once", "Enthusiasm for Pizza Fridays: 0/100 — CRITICAL FAILURE". Bottom: "Recommendation: AUTO-REJECT. Confidence: 99.97%"

**`interview-then-ghost`** — Multi-stage fake interview process plays out rapidly. Phone screen → Technical → Final round with VP → "Offer stage..." → loading spinner → screen goes blank. After 5s: "The recruiter has been 'reassigned'. This position has been 'put on hold'."

---

## Dark Mode

Support light and dark mode out of the box. Think LinkedIn's theme toggle — clean, corporate, soulless in both modes.

- Use Tailwind's `dark:` variant with `class` strategy (toggle via a class on `<html>`)
- Respect `prefers-color-scheme` as default, with a manual toggle in the header
- Store preference in localStorage, standard persist-on-refresh
- The overall palette should feel muted and professional in both modes — greys, whites/dark greys, subtle accent colours
- ATS skin accent colours should work in both modes
- Rejection animations: dark backgrounds (terminal, black hole) naturally work in both. Ensure light-background animations (shredder, fake email) adapt to the active theme.

---

## Writing Style for Content

The humour is **dry and deadpan**. Job listings read like real posts with absurdity buried in the details.

- "5+ years experience in React (the framework is 11 years old, but we need 15)"
- "Ability to thrive in a fast-paced environment (we are always on fire)"
- "Competitive salary (we competed to find the lowest possible number)"
- "Remote (must be in office 4 days a week)"
- "Unlimited PTO (average taken: 3 days/year)"

Rejection emails are hilariously corporate. ATS scores are absurdly specific. The 404 page is a rejection.

---

## Testing

Include **5-10 focused Vitest + React Testing Library tests** covering core logic:

1. **Search:** fuzzy search returns expected results for common queries, handles empty queries
2. **Repository:** `getJob` returns correct job, `getJobsByCompany` filters correctly
3. **Rejection mode filtering:** given a job's supported modes list, the UI only offers valid options
4. **Logo generator:** deterministic — same company ID always produces identical SVG output
5. **Route params:** skin and rejection mode are correctly read from and written to URL query params
6. **ATS skin rendering:** at least one skin renders without crashing given valid props
7. **Rejection mode rendering:** at least one mode renders and reaches completion state

These are smoke tests to prove the core logic works, not comprehensive coverage. Keep them fast and focused.

---

## MVP vs Iterations

### MVP (the one-shot build)

The goal is a working end-to-end flow: search → pick a job → fill out an application → get rejected.

- **Data:** 5 job listings across 2 companies (Google, Amazon). 2 categories (engineering, product). Each job has fake-email rejection content. At least 2 jobs have ats-score content.
- **ATS Skins (3):** WorkNight, GreenHouse of Pain, Talaeo
- **Rejection Modes (4):** dev-null, ghost, speedrun, fake-email
- **Pages:** HomePage, SearchResultsPage, JobPage (with full apply flow), NotFoundPage
- **Dark mode** toggle working
- **Tests:** the 5-10 vitest tests listed above, passing
- **Deploy-ready:** builds cleanly, serves from GitHub Pages, CNAME configured

This proves the architecture, the skin system, the rejection system, the data layer, the routing, and the shareable URLs. Everything after this is additive content following the established patterns.

### Iteration 1 — More Content

- Add remaining ATS skins (Rejectable, Lever to Nowhere)
- Add remaining rejection modes (shredder, black-hole, ats-score, interview-then-ghost)
- Expand to 8-10 companies, 30-50 job listings across all categories
- CompanyPage

### Iteration 2 — Polish & Virality

- Social sharing meta tags (og:image, og:title, og:description)
- Shareable rejection result cards ("I got rejected from Google in 0.003s!")
- Animation polish pass — easing curves, timing, mobile responsiveness
- More jobs, more rejection email variants, crowd-sourced contributions welcome

### Iteration 3 — (Optional, future)

- Build-time script to batch-generate job listings + rejection content via LLM API
- Migrate to client-server if traffic justifies it (the repository interface makes this painless)
- Analytics

---

## What NOT to Build

- No user accounts, auth, or real file storage
- No actual email sending
- No server-side anything
- No over-engineered state management — React state + URL params
- No external database — TypeScript modules are the database
- No CI/CD pipeline for v1 — deploy manually or with a simple GH Action
