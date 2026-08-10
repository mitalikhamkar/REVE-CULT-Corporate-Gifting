# REVE CULT — Corporate Gifting

A standalone local React + Vite site for REVE CULT's corporate gifting landing page.

## Prerequisites

- Node.js and npm installed.

## Run Locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (typically http://localhost:5173).

## Build

```bash
npm run build
```

## Preview the production build

```bash
npm run preview
```

## Notes

- The quote-request form on the page (`src/components/reve/InquiryForm.jsx`) currently stores
  submissions in the browser's `localStorage` under the `reve_inquiries` key. Wire it up to a
  real backend/email service when one is available.
