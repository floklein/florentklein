type ProjectTag = [name: string, url: string];

type Project = {
  name: string;
  description: string;
  url?: string;
  github?: string;
  tags: ProjectTag[];
};

export const projects: Project[] = [
  {
    name: "Ambiance",
    description:
      "App IA qui écoute votre scénario de jeu de rôle pour jouer la musique appropriée.",
    url: "https://ambiance.florentklein.dev/",
    github: "https://github.com/floklein/ambiance",
    tags: [
      ["Vite", "https://vite.dev/"],
      ["TanStack Router", "https://tanstack.com/router"],
      ["TanStack Query", "https://tanstack.com/query"],
      ["Bun", "https://bun.sh/"],
      ["Hono", "https://hono.dev/"],
      ["tRPC", "https://trpc.io/"],
      ["BetterAuth", "https://www.better-auth.com/"],
      ["Drizzle", "https://orm.drizzle.team/"],
      ["Gemini", "https://deepmind.google/models/gemini/"],
      ["Tailwind", "https://tailwindcss.com/"],
      ["Shadcn", "https://ui.shadcn.com/"],
    ],
  },
  {
    name: "Terra TCG",
    description:
      "Jeu mobile de cartes à collectionner où vous capturez des animaux en les photographiant.",
    github: "https://github.com/floklein/terra",
    tags: [
      ["Claude Code", "https://www.anthropic.com/claude-code"],
      ["React Native", "https://reactnative.dev/"],
      ["Expo", "https://expo.dev/"],
      ["IA", "https://openai.com/"],
      ["BetterAuth", "https://www.better-auth.com/"],
      ["Drizzle", "https://orm.drizzle.team/"],
      ["PostgreSQL", "https://www.postgresql.org/"],
    ],
  },
  {
    name: "great minds",
    description:
      "Jeu en temps réel pour tester votre complicité avec vos amis sur des thèmes variés.",
    url: "https://greatminds.florentklein.dev/",
    github: "https://github.com/floklein/greatminds",
    tags: [
      ["Vite", "https://vite.dev/"],
      ["WebSocket", "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API"],
      ["Ant Design", "https://ant.design/"],
      ["Colyseus", "https://www.colyseus.io/"],
      ["Motion", "https://motion.dev/"],
      ["TanStack Query", "https://tanstack.com/query"],
      ["Zustand", "https://zustand.docs.pmnd.rs/"],
      ["Turborepo", "https://turborepo.com/"],
    ],
  },
  {
    name: "Le jeu du Dico",
    description:
      "Jeu multijoueur où vous piégez vos amis en inventant des définitions de mots difficiles.",
    github: "https://github.com/floklein/dico",
    url: "https://dico.florentklein.dev/",
    tags: [
      ["Codex", "https://openai.com/codex/"],
      ["Next.js", "https://nextjs.org/"],
      ["AI SDK", "https://ai-sdk.dev/"],
      ["GPT-5.2", "https://openai.com/api/"],
      ["Tailwind", "https://tailwindcss.com/"],
      ["Shadcn", "https://ui.shadcn.com/"],
      ["Vitest", "https://vitest.dev/"],
    ],
  },
  {
    name: "Artguessr",
    description: "Jeu éducatif consistant à deviner la date d'une œuvre d'art.",
    github: "https://github.com/floklein/artguessr",
    url: "https://artguessr.florentklein.dev/",
    tags: [
      ["Next.js", "https://nextjs.org/"],
      ["Tailwind", "https://tailwindcss.com/"],
      ["Shadcn", "https://ui.shadcn.com/"],
      ["Zod", "https://zod.dev/"],
    ],
  },
  {
    name: "K3 Chat",
    description: "Chat IA multi-modal avec choix du modèle.",
    github: "https://github.com/floklein/k3chat",
    url: "https://cloneathon.t3.chat/",
    tags: [
      ["Next.js", "https://nextjs.org/"],
      ["Convex", "https://www.convex.dev/"],
      ["Gemini", "https://deepmind.google/models/gemini/"],
      ["Claude", "https://www.anthropic.com/claude"],
      ["GPT", "https://openai.com/chatgpt/"],
      ["Tailwind", "https://tailwindcss.com/"],
      ["Shadcn", "https://ui.shadcn.com/"],
    ],
  },
  {
    name: "florentklein.dev",
    description: "Ce portfolio, avec son assistant IA.",
    github: "https://github.com/floklein/florentklein",
    url: "https://florentklein.dev/",
    tags: [
      ["Next.js", "https://nextjs.org/"],
      ["AI SDK", "https://ai-sdk.dev/"],
      ["GPT-5", "https://openai.com/gpt-5/"],
      ["Tailwind", "https://tailwindcss.com/"],
      ["Shadcn", "https://ui.shadcn.com/"],
    ],
  },
  {
    name: "kAI",
    description: "Chat IA multi-modal hors-ligne pour Chrome Gemini Nano.",
    github: "https://github.com/floklein/kai",
    tags: [
      ["Vite", "https://vite.dev/"],
      ["Dexie", "https://dexie.org/"],
      ["TanStack Router", "https://tanstack.com/router"],
      ["Tailwind", "https://tailwindcss.com/"],
      ["Shadcn", "https://ui.shadcn.com/"],
    ],
  },
  {
    name: "HALP!",
    description: "App sociale autour des sondages pour iOS, Android et le web.",
    github: "https://github.com/floklein/halp",
    tags: [
      ["React Native", "https://reactnative.dev/"],
      ["Expo", "https://expo.dev/"],
      ["PostgreSQL", "https://www.postgresql.org/"],
      ["Drizzle", "https://orm.drizzle.team/"],
      ["BetterAuth", "https://www.better-auth.com/"],
      ["Tamagui", "https://tamagui.dev/"],
    ],
  },
  {
    name: "Mailectron",
    description: "Client mail minimaliste pour macOS et Windows.",
    tags: [
      ["Electron", "https://www.electronjs.org/"],
      ["tRPC", "https://trpc.io/"],
      ["Supabase", "https://supabase.com/"],
      ["Turborepo", "https://turborepo.com/"],
      ["Tailwind", "https://tailwindcss.com/"],
      ["Shadcn", "https://ui.shadcn.com/"],
    ],
  },
];
