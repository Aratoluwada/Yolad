# Yolad
Demo Website for Yolad Montessori School

Vite + React. CHCI-style design in Yolad's colours. Home page only for now.

```bash
npm install
npm run dev      # local preview
npm run build    # production build in dist/ (deploy this on Vercel)
```

## Where to edit

- `src/data.js`: school name, motto, address, phone, email, social links, ticker words and the four "Yolad way" cards. Address, phone and email are `null` until the school confirms them.
- `src/Sections.jsx`: the page sections.
- `src/styles.css`: colours and type are the tokens at the top of the file.
- `src/assets/`: photos cropped from the school's Instagram posts. Replace them with the school's original files when you get them.

`npm run build:single` makes one self-contained HTML file in `dist-single/` (used for the quick preview link).
