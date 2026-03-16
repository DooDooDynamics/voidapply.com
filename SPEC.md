# VoidApply — Project Spec

> **voidapply.com** — "Apply faster than ever. Right to the void."
>
> A satirical job board with parody ATS interfaces that lets you fill out an application and rejects you immediately. Built as catharsis for everyone who's applied to 200 jobs and heard back from 0.

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

### LinkedOut™ (`linked-out`) — LinkedIn Easy Apply parody

- LinkedIn blue (#0a66c2) and white. Looks exactly like a LinkedIn job page — company banner, follower count, "Easy Apply" badge prominently displayed.
- The "Easy Apply" promise is a lie: clicking it opens a 47-question form across multiple "quick steps."
- Shows "1,247 applicants" in the header, updating to "1,248" the moment you land on the form.
- After submission, a toast: "Application sent! This listing was posted 847 days ago."
- Footer note: "The hiring manager last visited LinkedIn in 2022."

### iCan'tMS™ (`icantms`) — iCIMS parody

- Grey and corporate blue. Notoriously bad enterprise UX used by massive corporations.
- Forces account creation with contradictory password rules (must contain a symbol, but `@` is not allowed).
- After uploading your resume, shows a spinner for 8 seconds: "Parsing resume with AI..." — then displays every field blank. "Please complete all required fields manually."
- Submit button is greyed out. No error messages explain why. One field somewhere has a hidden validation failure.
- Final page is a generic "Thank you for your interest" with a reference number like `REQ-2024-847291-A` and zero other information.

### AshbyeHQ™ (`ashbye-hq`) — AshbyHQ parody

- White, airy, and ruthlessly minimal. The darling of well-funded Series B startups who read design blogs.
- Application has a "Custom Questions" section with a single field: "Why do you want to work here?" — 10,000 character limit, but anything over 500 characters triggers a hidden validation: "Please be concise."
- A "Pipeline Stage" tracker on the sidebar shows your real-time status: Applied → Review → ... The tracker freezes on "Review" indefinitely.
- Rejection arrives as a warm, hyper-personalised email that contains zero personal information. Subject: "An update on your application, Candidate."

### Teamfailor™ (`teamfailor`) — Teamtailor parody

- Beautifully branded Scandinavian-minimalist career page. Full-bleed culture photos. "We move fast, we care deeply, we have unlimited oat milk."
- Forces you to watch a 2-minute "Meet the Team!" culture video before the Apply button unlocks. The video autoplays with sound.
- After applying, a candidate portal shows your application status as a cheerful coloured dot: 🟡 "In Review". The dot never changes colour.
- Footer: "We aim to respond within 5 business days." No follow-up ever arrives.

### DumbRecruiters™ (`dumb-recruiters`) — SmartRecruiters parody

- Corporate blue and white. Proclaims "AI-Powered Hiring" on every screen. The AI is doing the opposite of what you'd want.
- A live "AI Match Score™" gauge is visible as you fill in the form. It starts at 100% and visibly drops with each truthful answer. Lying about your years of experience is the only way to keep it above 50%.
- After submit: "Your application is being reviewed by Smart AI™. Estimated time: 2–4 business decades."
- Confirmation page includes a QR code. It links to the company's homepage. No other information.

### BamBoom™ (`bamboom`) — BambooHR parody

- Friendly greens and warm whites. Little illustrated people doing teamwork things. Very wholesome. Very HR.
- As you fill out the form, a small animated bamboo stalk grows in the corner — the longer you spend, the taller it gets. On submit, a cartoon axe chops it down.
- Form fields include "How do you like to receive feedback?" and "Describe your ideal manager in three words." These answers go nowhere.
- Completion screen: "Your career journey with us starts here! 🌱" — followed immediately by an auto-rejection notification.

### JobVoid™ (`jobvoid`) — Jobvite parody

- Red and white, ageing enterprise UI that received one coat of "modern" paint circa 2019.
- Offers "Social Apply" — apply instantly with LinkedIn or Indeed. Still rejects you.
- After applying, shows fake live recruiter activity in the sidebar: "Sarah (Recruiter) viewed your profile · 3 seconds ago." Then: "Sarah (Recruiter) is no longer with the company."
- Email confirmation arrives immediately: "Your application has been received! Reference: JV-{random 8-digit number}." No other communication ever follows.

### ByeBob™ (`byebob`) — HiBob parody

- Saturated startup colours, friendly rounded font, cheerful illustrations throughout. HR software that wants to be your friend.
- Very casual tone that makes the rejection more jarring. "Hey 👋 Tell us a bit about yourself!" / "Awesome! Almost there!" / "You're doing great!"
- After you submit, confetti rains down: "Woohoo! Bob got your application!" Four seconds pass. The confetti stops. A single line appears: "Oops — looks like Bob isn't home right now."
- Candidate portal username is auto-assigned as `candidate_{uuid}`. There is no way to change it.

---

## Rejection Modes

Each mode is a lazy-loaded full-screen takeover component. After the animation, show a completion state with "Apply to Another Job" and a shareable URL.

### Generic Modes (work with any job, no custom content needed)

**`dev-null`** — Terminal window drops down. Typewriter effect: `$ cat application.pdf | review --thorough | /dev/null`. Then: "Your application has been piped to /dev/null. This is the most efficient rejection pipeline in the industry."

**`shredder`** — Form shrinks to a document, scrolls upward into an animated paper shredder. Strips fall as CSS confetti. "Your application has been shredded. For the environment, we've recycled it into another company's job listing."

**`black-hole`** — Form gets sucked into a gravitational singularity at screen center (scale + rotate + opacity). A black circle grows. Text orbits then gets consumed. "Your application has crossed the event horizon."

**`ghost`** — The most realistic mode. Submit button shows a spinner for 5 seconds. Then... nothing. Page sits there. After 10s, faint grey text: "(This is the most realistic rejection mode)". After 15s: "Status: Under Review (since 2024)".

**`speedrun`** — Timer starts on submit click. Giant "REJECTED" stamp after 0.003 seconds. Shows a leaderboard of fake records. "Amazon — 0.002s (WR)".

**`assessment-gauntlet`** — You're redirected to a third-party assessment platform ("PyMetrix™"). A three-hour battery begins: HackerRank coding problem, personality questionnaire (73 questions), abstract reasoning games, video interview prompt. A progress bar labelled "Step 1 of 6" crawls forward. After completing everything, a confirmation screen: "Assessment complete. Results submitted to hiring team." Four seconds later, an automated rejection email arrives. "Our AI-powered screening has determined you are not a match at this time. Your responses will be stored for 7 years."

### Personalized Modes (need per-job rejection content)

**`fake-email`** — Screen transitions to a Gmail-esque inbox. Loading state, then a rejection email arrives from the company. Personalized subject, body, the works. Below the email: "We'll keep your CV on file" with a countdown: "Time on file: 4...3...2...1...0. Deleted."

**`ats-score`** — Dashboard showing "AI Screening Results". Animated score gauge sweeping to some terrible number (2-15 / 100). Category breakdown with per-job snarky comments: "Buzzword Density: 3/100 — Did not mention 'synergy' once", "Enthusiasm for Pizza Fridays: 0/100 — CRITICAL FAILURE". Bottom: "Recommendation: AUTO-REJECT. Confidence: 99.97%"

**`interview-then-ghost`** — Multi-stage fake interview process plays out rapidly. Phone screen → Technical → Final round with VP → "Offer stage..." → loading spinner → screen goes blank. After 5s: "The recruiter has been 'reassigned'. This position has been 'put on hold'."

**`culture-fit`** — The most infuriating real rejection. A progress bar races through stages: Resume Screened ✓ → Phone Screen ✓ → Technical ✓ → Final Round ✓ → References Checked ✓ → Offer Pending... then: email notification sound. Opens a 2-sentence email: "After careful consideration, we've decided to move forward with candidates who are a stronger cultural fit. We wish you the best in your search." No score. No feedback. No explanation. Per-job content: the specific stage reached before the culture-fit guillotine dropped, and the recruiter's name who sent it.

**`phantom-offer`** — The cruelest mode. Simulates receiving a verbal offer: a warm recruiter email saying "We're thrilled to extend an offer — expect the formal paperwork by EOD Friday 🎉." A countdown timer ticks toward Friday. On Friday: nothing. Three business days pass (fast-forwarded with a clock animation). Then a new email arrives: "After some internal restructuring, we've made the difficult decision to put this role on hold. You were our top candidate and we were truly impressed. We hope to reconnect when the position reopens." Per-job content: recruiter name, promised timeline, and the fake offer details (title, fake salary).

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
