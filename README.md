# Shivanya

The Shivanya frontend is the main platform website and application entry point. It uses the shared Shivanya SDK packages instead of duplicating the common UI and shell.

## Routes

- `/` — SDK and component dashboard
- `/apps` — application catalog
- `/features` — platform features
- `/docs` — documentation hub
- `/components` — shared UI component families
- `/packages` — SDK package reference
- `/guides` — developer guides
- `/guides/getting-started` — installation and setup
- `/guides/authentication` — Auth SDK setup
- `/guides/shell` — Shell integration
- `/guides/troubleshooting` — common integration issues
- `/pricing` — plan overview
- `/contact` — contact information
- `/terms` and `/privacy` — legal content starters
- `/auth/login`, `/auth/register`, `/auth/forgot`, `/auth/reset`, `/auth/verify` — SDK-powered authentication screens
- `/app/dashboard`, `/app/activity`, `/app/profile` — authenticated-workspace UI routes

## SDK packages

The frontend consumes the published packages:

- `shivanya-ui`
- `shivanya-core`
- `shivanya-shell`
- `shivanya-auth`
- `shivanya-ai`

The SDK repository is a workspace of separate packages. The root `shivanya-sdk` repository is not a unified installation entry point; install the individual published packages used by this website. Verify package versions and registry availability before changing dependencies.

## Setup

Use a supported Node.js release and install the exact dependencies recorded in the lockfile:

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

For validation:

```bash
npm run typecheck
npm run build
```

## Authentication configuration

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_AUTH_BASE_URL` to the actual Shivanya Auth API base URL for your environment. The authentication routes use `AuthProvider` and `AuthPage` from `shivanya-auth` in cookie mode. When the URL is not configured, the routes show setup instructions rather than returning a fake successful login.

Do not put API secrets or private tokens in `NEXT_PUBLIC_*` variables. Only public configuration belongs there.

## Integration status

The public website, package documentation, shell-based dashboard layout, protected workspace routes, and Auth/AI SDK routes are wired to the shared package APIs. Confirm that all published package versions are available in the npm registry and that a clean `npm ci` succeeds before release. Product data, activity, pricing, contact submission and account persistence still need their actual backend endpoints before those workflows can be considered production-live. The legal pages are starter content and require legal review.

## Git workflow

Development is isolated on a feature branch and should be reviewed through a pull request. Do not merge until dependency installation, type checking, production build and relevant route/auth tests pass.
