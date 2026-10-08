# OctoFit Tracker Frontend

React 19 presentation tier for the OctoFit Tracker multi-tier application.

## API Configuration

Define `VITE_CODESPACE_NAME` in `.env.local` when running in GitHub Codespaces:

```env
VITE_CODESPACE_NAME=your-codespace-name
```

When `VITE_CODESPACE_NAME` is set, the frontend calls:

```text
https://$VITE_CODESPACE_NAME-8000.app.github.dev
```

If it is omitted in Codespaces, the app derives the API host from the current `5173` frontend URL. Outside Codespaces, the frontend safely falls back to:

```text
http://localhost:8000
```

The app reads `/api/activities/`, `/api/leaderboard/`, `/api/teams/`, `/api/users/`, and `/api/workouts/` and supports both plain array responses and paginated response wrappers such as `results`, `items`, or `data`.

