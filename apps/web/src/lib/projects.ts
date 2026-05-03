type ProjectTag = [name: string, url: string];

type Project = {
  name: string;
  description: string;
  url?: string;
  appStore?: string;
  github?: string;
  tags: ProjectTag[];
};

export const projects: Project[] = [
  {
    name: "Chef",
    description:
      "SaaS de gestion automatisée des repas hospitaliers, respectant les normes d'équilibre nutritionnel, et les contraintes patient et métier.",
    url: "https://chef.florentklein.dev/",
    tags: [
      ["Next.js", "https://nextjs.org/"],
      ["Tailwind", "https://tailwindcss.com/"],
      ["Shadcn", "https://ui.shadcn.com/"],
      ["Playwright", "https://playwright.dev/"],
      ["Claude Code", "https://www.anthropic.com/claude-code"],
    ],
  },
  {
    name: "MacGuffin",
    description:
      "App mobile pour découvrir les meilleurs films à voir au cinéma autour de soi, et réserver sa séance.",
    appStore: "https://apps.apple.com/fr/app/macguffin/id6761733673",
    tags: [
      ["React Native", "https://reactnative.dev/"],
      ["Expo", "https://expo.dev/"],
      ["Nativewind", "https://nativewind.dev/"],
      ["RN Reusables", "https://reactnativereusables.com/"],
      ["TanStack Query", "https://tanstack.com/query"],
      ["BetterAuth", "https://www.better-auth.com/"],
      ["Drizzle", "https://orm.drizzle.team/"],
      ["PostgreSQL", "https://www.postgresql.org/"],
      ["Zod", "https://zod.dev/"],
    ],
  },
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
      ["React Native", "https://reactnative.dev/"],
      ["Expo", "https://expo.dev/"],
      ["IA", "https://openai.com/"],
      ["BetterAuth", "https://www.better-auth.com/"],
      ["Drizzle", "https://orm.drizzle.team/"],
      ["PostgreSQL", "https://www.postgresql.org/"],
      ["Claude Code", "https://www.anthropic.com/claude-code"],
    ],
  },
  {
    name: "Courrier",
    description: "Client mail minimaliste pour macOS et Windows.",
    github: "https://github.com/floklein/courrier",
    tags: [
      ["Electron", "https://www.electronjs.org/"],
      ["Vite", "https://vite.dev/"],
      ["Zustand", "https://zustand.docs.pmnd.rs/"],
      ["Zod", "https://zod.dev/"],
      ["TS Router", "https://tanstack.com/router"],
      ["TS Query", "https://tanstack.com/query"],
      ["TS Virtual", "https://tanstack.com/virtual"],
      ["Turborepo", "https://turborepo.com/"],
      ["Shadcn", "https://ui.shadcn.com/"],
      ["Vitest", "https://vitest.dev/"],
      ["Codex", "https://openai.com/codex/"],
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
      [
        "WebSocket",
        "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API",
      ],
      ["Ant Design", "https://ant.design/"],
      ["Colyseus", "https://www.colyseus.io/"],
      ["Motion", "https://motion.dev/"],
      ["TanStack Query", "https://tanstack.com/query"],
      ["Zustand", "https://zustand.docs.pmnd.rs/"],
      ["Turborepo", "https://turborepo.com/"],
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
    name: "Le jeu du Dico",
    description:
      "Jeu multijoueur où vous piégez vos amis en inventant des définitions de mots difficiles.",
    github: "https://github.com/floklein/dico",
    url: "https://dico.florentklein.dev/",
    tags: [
      ["Next.js", "https://nextjs.org/"],
      ["AI SDK", "https://ai-sdk.dev/"],
      ["GPT-5.2", "https://openai.com/api/"],
      ["Tailwind", "https://tailwindcss.com/"],
      ["Shadcn", "https://ui.shadcn.com/"],
      ["Vitest", "https://vitest.dev/"],
      ["Codex", "https://openai.com/codex/"],
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
];
