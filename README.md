# DramaList 🎬

A Letterboxd-style web app for discovering, tracking, and rating international dramas.

**Live site:** [drama-curator-pi.vercel.app](https://drama-curator-pi.vercel.app/)
**Repo:** [github.com/Tselate/drama-curator](https://github.com/Tselate/drama-curator)

---

## About

DramaList helps users discover dramas and keep track of what they're watching, have completed, or want to watch — similar to how Letterboxd works for films. Built as a personal portfolio project and a tool I actually use myself.

## Features

- 🔍 **Search** — find dramas by title in real time
- 🏷️ **Genre filters** — browse by Romance, Thriller, Comedy, Historical, and more
- 📺 **Drama detail pages** — synopsis, cast, network, episode count, rating
- ✅ **Personal watchlist** — track dramas as Watching / Completed / Want to Watch
- ⭐ **Star ratings** — rate dramas you've watched
- 🎯 **Recommendation engine** — genre-based "More Like This" suggestions
- 🔐 **User authentication** — email sign up and sign in
- 📱 **Mobile responsive** — clean experience on any screen size

## Tech Stack

| Layer | Tech |
|---|---|
| Frontend | React (Vite) |
| Styling | Tailwind CSS |
| Database & Auth | Supabase (PostgreSQL) |
| Hosting | Vercel |
| Routing | React Router |

## Architecture

- Component-based structure (`components/`, `pages/`, `hooks/`, `lib/`)
- Custom React hooks for data fetching (`useDramas`, `useWatchlist`, `useRecommendations`, etc.)
- Row Level Security (RLS) policies in Supabase so users can only access their own watchlist data
- Auth state managed globally via React Context

## Data

Drama data sourced from a public Kaggle dataset and stored in a custom Supabase database (1,600+ titles), with plans to enrich via the TMDB API.

## Future Plans

- Google OAuth login
- Country filters (Turkish, Japanese, Thai dramas)
- Trending section
- User reviews and comments
- Profile pages with watch stats

## Run Locally

```bash
git clone https://github.com/Tselate/drama-curator.git
cd drama-curator
npm install
npm run dev
```

You'll need your own Supabase project and `.env` file with:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_KEY=your_supabase_anon_key
```

---

Built by [Tselate](https://github.com/Tselate) as a learning project to strengthen full-stack development skills.
