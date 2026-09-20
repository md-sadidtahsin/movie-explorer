# 🎬 MovieExplorer

A simple React app to browse and search TV shows, built with **Vite**. It uses the free [TVmaze API](https://www.tvmaze.com/api) — no API key needed.

## What it does

- **Home page** — a hero banner with an "Explore Now" button.
- **Movies page** — search bar + a responsive grid of show cards (poster, title, rating, year).
- **Details modal** — click "See Details" on any card to see the full summary, genres, and rating in a pop-up.

## Tech used

- React (with `useState` / `useEffect` only — no extra state libraries)
- `react-router-dom` for the Home / Movies pages
- Plain CSS (no Tailwind, kept simple on purpose)
- TVmaze REST API (`/shows` and `/search/shows?q=`)

## Project structure

```
src/
├─ components/
│  ├─ Navbar.jsx        top nav bar
│  ├─ Footer.jsx        bottom footer
│  ├─ SearchBar.jsx     the search input box
│  ├─ MovieCard.jsx     one show's preview card
│  └─ MovieModal.jsx    the "see details" pop-up
├─ pages/
│  ├─ Home.jsx          landing page
│  └─ Movies.jsx        listing page (fetches + search logic lives here)
├─ App.jsx              sets up the routes (Home vs Movies)
├─ main.jsx             app entry point
└─ index.css            all the styling
```

Each file has comments explaining what it does — that's on purpose, so it's easy to follow even if you're new to React.

## Running it locally

```bash
npm install
npm run dev
```

Then open the URL it prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
```

This creates a `dist/` folder you can deploy anywhere (Vercel, Netlify, GitHub Pages).




