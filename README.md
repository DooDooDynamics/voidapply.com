# VoidApply

**Apply faster than ever. Right to the void.**

A satirical job board with parody ATS interfaces that lets you fill out an application and rejects you immediately. Built as catharsis for everyone who's applied to 200 jobs and heard back from 0.

---

## What it does

1. Search for a job
2. Fill out a full application
3. Get rejected, instantly

---

## Tech

- Vite + React 18 + TypeScript
- React Router v6 — URL is the source of truth
- Tailwind CSS v3 + Framer Motion
- Fuse.js for client-side fuzzy search
- No backend. No APIs. Pure static SPA.
- Deployed with Cloudflare Pages

---

## ATS Skins

Parody clones of real applicant tracking systems:

- **WorkNight** — Workday. Eight steps to submit a CV you already uploaded.
- **GreenHouse of Pain** — Greenhouse. AI screening badge, passion scale, instant regret.
- **Talaeo** — Taleo/Oracle. Early-2010s enterprise UI. Session timeout. Misaligned fields.

## Rejection Modes

- **Dev Null** — `cat application.pdf | /dev/null`
- **Ghost** — Spinner, then silence. Forever.
- **Speedrun** — REJECTED in 0.003 seconds. World record: Amazon, 0.002s.
- **Fake Email** — A personalized rejection from HR. Your CV will be kept on file. 4...3...2...1. Deleted.

---

## Development | Quick Start Guide

```bash
npm install
npm run dev
```

```bash
npm run build   # production build
npm run test    # vitest
```
