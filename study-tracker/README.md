# Study Tracker — Class 10 (CBSE 2026–27)

A responsive React + TypeScript + Vite app with Supabase authentication/cloud data, server-side AI practice generation and planning, syllabus progress, notes, basic PDF exports, charts, themes, and PWA installation support.

> **Honest implementation status:** This is a functional starter project, not a claim that every item in the master specification is finished. It does not yet implement full timed-test countdown/auto-submit, full text editing/notes CRUD beyond create/delete, full spaced-repetition interval progression, background push scheduling, achievements/streak session tracking, complete historical quiz analytics, offline write queue/conflict resolution, or a fully verified chapter-by-chapter Hindi Course B seed. Those should be implemented and tested before production use. Do not treat the provisional Hindi rows or estimated exam date as confirmed official syllabus/timetable data.

## Prerequisites
- Node.js 20+
- A Supabase project
- An OpenAI API key (only needed for AI planner and question generation)
- Netlify CLI or Netlify deployment for the serverless API routes

## Run locally

```bash
npm install
cp .env.example .env
# Add your Supabase project URL and anon key to .env
npm run dev
```

The frontend can load without Supabase, but real account creation and private cloud data require valid Supabase credentials. The AI endpoints require server environment variables and run as Netlify Functions; use `netlify dev` for local testing:

```bash
npm install
npm install -D netlify-cli
npx netlify dev
```

This starts Vite and maps `/api/generate-quiz` and `/api/generate-plan` to functions.

## Supabase setup
1. Create a project at [Supabase](https://supabase.com/).
2. Open **SQL Editor** and run `supabase/schema.sql`.
3. Copy Project URL and the **anon/public key** into `.env` as `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`.
4. In **Authentication → URL Configuration**, set the local Site URL to `http://localhost:8888` for `netlify dev` and add your deployed URL plus its auth callback URL to Redirect URLs.
5. Under **Authentication → Providers**, enable Google and enter OAuth Client ID/Secret from your Google Cloud OAuth configuration. Use the Supabase-provided callback URL in Google Cloud. Add production and local redirect URLs exactly; do not use wildcards in production.
6. Ensure email confirmation settings match your intended launch. Password reset emails require SMTP/email configuration for reliable delivery.

The schema enables RLS on user-owned tables and owner policies. Syllabus catalogue tables are authenticated-read-only for clients. Never expose a service-role key in the browser.

## AI server configuration
Set these in Netlify Site configuration → Environment variables (not in `VITE_*` variables):

- `OPENAI_API_KEY` — private API key
- `OPENAI_MODEL` — optional; defaults to `gpt-4.1-mini`
- `SUPABASE_URL` — Supabase project URL
- `SUPABASE_ANON_KEY` — Supabase anon/public key, used by the server to verify the signed-in user's JWT

Both server functions verify the bearer session with Supabase, validate inputs with Zod, and return errors instead of substituting fake content. Quiz generation validates question schema, four distinct options, duplicates, and correct-index shape. A language model cannot guarantee perfect educational correctness, so generated questions should be reviewed and users should report errors.

## Build and deploy

```bash
npm run build
npx netlify deploy --build       # preview deployment
npx netlify deploy --build --prod # production deployment
```

Alternatively, deploy the frontend to Vercel, but adapt the two Netlify function files to Vercel API routes and update `netlify.toml` redirects.

## Install as a PWA
Deploy over HTTPS, then open the site in Chrome/Edge. Use **Install app** from the browser menu. `public/manifest.webmanifest` and a small service worker are included. The service worker caches only the app shell; this is not full offline data sync.

## PDF export
The client uses jsPDF for note, syllabus, and report exports. Current PDF text is plain-text oriented. Hindi glyph rendering depends on the selected PDF font; for production-quality Hindi exports, bundle a suitable Unicode font and register it with jsPDF rather than relying on built-in Helvetica.

## Syllabus sources and accuracy
- IT 402, Class X, 2026–27: [Official CBSE curriculum PDF](https://cbseacademic.nic.in/web_material/Curriculum27/Sec/402-IT-X.pdf). The unit names in the app match the published unit headings.
- CBSE Class X curriculum landing page, 2026–27: [Official curriculum index](https://cbseacademic.nic.in/curriculum_2027.html).
- CBSE Class X 2026–27 sample question papers and marking schemes: [Official CBSE SQP page](https://cbseacademic.nic.in/SQP_CLASSX_2026-27.html).

The IT syllabus list records the 2026–27 unit headings, but the detailed chapter/topic hierarchy should be completed against the full PDF before representing it as exhaustive. The Hindi Course B chapter rows intentionally remain **provisional** because this build did not verify the exact 2026–27 chapter-wise PDF content. The exam countdown defaults to a clearly provisional date and is editable in Settings.

## Current feature checklist
- [x] Email/password signup and login via Supabase; Google OAuth button and password reset action
- [x] Syllabus progress/confidence stored in Supabase
- [x] Daily AI plan function uses progress/confidence and validates time budget and chapters
- [x] AI MCQ function, schema validation, answer review, saved attempts/answers
- [x] Notes create/delete and PDF export
- [x] Basic progress dashboard and task completion chart from saved task records
- [x] Theme accent/dark mode and settings persistence
- [x] Responsive layout and installable PWA shell
- [ ] Fully timed quiz countdown and automatic submission
- [ ] Complete official Hindi chapter seed and exhaustive IT topic/practical seed
- [ ] Full weekly study-time/accuracy analytics, streaks, achievements
- [ ] Spaced revision scheduler progression and scheduled push notifications
- [ ] Full offline mutation queue, conflict handling, and production test suite

## Security and testing notes
- Run SQL in a fresh Supabase project and inspect RLS policies in Supabase before onboarding real users.
- Test registration, email verification, Google callback, password reset, user A vs user B data isolation, AI endpoints with missing/invalid JWT, malformed model output, rate limits, export permissions, and mobile breakpoints.
- Add server-side rate limiting before public launch. The current functions validate requests but do not include a distributed rate limiter.
- Add automated integration/e2e tests and a reviewed syllabus content pipeline before describing this as production-ready.
