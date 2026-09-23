# Trovec Technologies — Website Source

React (Vite) site. All page content lives in `data/*.json`. Edit those files to change copy; components render from JSON.

## Quick start

```bash
npm install
npm run dev      # local preview
npm run build    # production build → dist/
npm run preview  # serve the build
```

## Structure

```
trovec-website-source/
├── data/
│   ├── locales/
│   │   ├── en.json       Full English content pack
│   │   ├── ar.json       Arabic
│   │   ├── ur.json       Urdu
│   │   ├── hi.json       Hindi
│   │   └── tl.json       Filipino
│   └── *.json            Source section files (English; mirrored into locales/en.json)
├── src/
│   ├── components/
│   ├── hooks/useContent.jsx   Language + light/dark/system theme
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
└── package.json
```

## Languages & theme

- Language dropdown (EN / العربية / اردو / हिन्दी / Filipino) swaps the entire page from `data/locales/{lang}.json`
- Theme toggle cycles **Light → Dark → System** (saved in localStorage)
- Arabic and Urdu switch the document to RTL automatically

To edit copy for a language, open the matching file under `data/locales/` and change strings there. Keep the same JSON shape across all five files.

## Adding a 19th sector

Open `data/sectors.json` and push a new object into `items`:

```json
{
  "id": 19,
  "name": "New Sector Name",
  "platform": "Trovec SomethingOS",
  "status": "vision",
  "one": "One-line description shown on the card.",
  "market": "A sourced market signal, or note that data was not gathered.",
  "modules": ["Module A", "Module B"],
  "ai": ["AI capability A", "AI capability B"],
  "why": "Honest note on why this sector is staged where it is."
}
```

Status values: `pilot` | `concept` | `planned` | `vision` — keep these honest.

## Forms

Contact forms are illustrative placeholders. Wire them to a CRM or form backend before going live.
