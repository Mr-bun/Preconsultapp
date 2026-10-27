# PreConsult demo

A clickable prototype of **PreConsult**: a summary-only, pre-consultation record view for psychiatry. Before a consult, the clinician sees a summary of the patient's record, and every statement links to the passage in the source document it came from.

> **All data in this repository is synthetic.** Every patient, clinician, GP practice and hospital is fictional. Postcodes use the `ZZ` suffix and phone numbers the `555` block so nothing resembles a real record. Every document carries a "SYNTHETISCH" watermark. This is not a medical device and must never be used with real patient data. GitHub Pages sites are public.

## What it shows

- **Welcome and demo sign-in.** The username and password are prefilled and locked, so nobody can type real employee credentials. The password is a masked, read-only text field rather than a password input, so browsers never offer to save or autofill it.
- **Whole-app NL / EN toggle.** Interface, summaries, questions and source documents all switch language. The choice is remembered in the browser.
- **Today's schedule.** A day calendar dated to the real current day, with a list view toggle. Select an appointment to open the summary, or switch patients from inside a summary.

- **Five synthetic psychiatry patients** with 29 source documents in Dutch clinical formats: GP referral letters (verwijsbrief), SOEP journal entries, POH-GGZ notes, discharge letters (ontslagbrief), a relapse prevention plan (signaleringsplan), a crisis assessment, lab reports and medication overviews.
- **Cited summary.** Every summary statement, flag, test result and previous contact opens its source document with the cited passage highlighted.
- **Verbatim risk history.** Risk quotes are read straight from the cited passage, so they cannot drift from the source. A missing risk assessment is shown as a gap.
- **NL / EN toggle.** Documents are written in Dutch, with English translations for non-Dutch audiences.
- **Ask the record.** Scripted questions answered from the record with sources. Requests for treatment advice get an "outside scope" reply that lists the relevant entries instead.
- **Erase on end of consultation**, mirroring the product's ephemeral design.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm test           # checks every citation resolves to a real passage
npm run typecheck
npm run build      # outputs dist/
```

## Deploy to GitHub Pages

The workflow in `.github/workflows/deploy.yml` tests, typechecks, builds and deploys on every push to `main`.

One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions.** The site then appears at `https://<user>.github.io/<repo>/`. The Vite `base` is relative, so any repo name works.

## How the data is organized

```
src/data/
  types.ts             Data model: patients, documents, citations
  orgs.ts              Fictional organizations
  patients/p1-…p5-…    One file per patient: the summary and its source documents
  validate.ts          Checks every citation; run by `npm test` and in CI
```

A citation is `{ doc: 'p1-ref', at: 'hpi' }`: a document id plus the id of a passage inside it (a paragraph, SOEP line, table row, list item or plan phase). The build fails if any citation points at a missing document or passage, or at another patient's document.

### Adding a document

1. Add it to the patient's `docs` array with Dutch (`nl`) and English (`en`) text.
2. Give citable passages an `id`.
3. Cite it from the summary with `{ doc, at }`.
4. Run `npm test`.

## Scope

v0.5 is summary-only by design: no recommendations, no confidence scores, no medication advice. See the architecture and compliance notes kept alongside this project for the regulatory reasoning (MDR, EU AI Act, GDPR).
