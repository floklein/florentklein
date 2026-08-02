# florentklein

Personal portfolio of Florent Klein — React developer and Lead Frontend at Dametis. A single-page site showcasing experience and selected projects, with an AI chat assistant that answers questions about Florent using the site's own data as context.

## Tech stack

- **Next.js 16** (App Router, Turbopack) with **React 19**
- **TypeScript**
- **Tailwind CSS 4** + **shadcn/ui** (Radix UI) for the UI
- **Motion** for reveal-on-enter animations and interaction feedback
- **AI SDK** (`ai` + `@ai-sdk/openai`) powering the chat assistant at `/api/chat`
- **TanStack Query & Form**, **next-themes** (dark mode), **sonner** (toasts)
- **Bun** package manager
- **Biome** for formatting and linting

## Getting started

Install the dependencies:

```bash
bun install
```

Set up environment variables:

```bash
cp .env.example .env
```

- `OPENAI_API_KEY` — required for the AI chat assistant
- `NEXT_PUBLIC_SERVER_URL` — public URL of the app

Then run the development server:

```bash
bun dev
```

Open [http://localhost:3001](http://localhost:3001) in your browser.

## Project structure

```
florentklein/
└── src/
    ├── app/            # App Router pages, API routes, SEO (sitemap, robots, OG images)
    │   └── api/chat/   # AI chat endpoint (streaming)
    ├── components/     # Site components (chat, header, scroll reveal, ...)
    │   └── ui/         # shadcn/ui primitives
    └── lib/            # Data (experiences, projects, links, texts) and utils
```

## Available scripts

- `bun dev`: Start the development server
- `bun run build`: Build the app
- `bun check-types`: Check TypeScript types
- `bun check`: Run Biome formatting and linting
