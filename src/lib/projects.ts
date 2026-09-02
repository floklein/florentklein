type ProjectTag = [name: string, url: string];

export type FeaturedTone = "cinema" | "disk" | "health" | "food";

export type FeaturedProject = {
  kicker: string;
  lightImage: string;
  darkImage: string;
  imageAlt: string;
  imagePosition: "left" | "right";
  tone: FeaturedTone;
  ctaLabel: string;
};

export type Project = {
  name: string;
  description: string;
  url?: string;
  appStore?: string;
  github?: string;
  entries?: {
    name: string;
    url: string;
    github?: string;
  }[];
  featured?: FeaturedProject;
  tags: ProjectTag[];
};

export type FeaturedDuo = {
  name: string;
  description: string;
  kicker: string;
  lightImage: string;
  darkImage: string;
  imageAlt: string;
  imagePosition: "left" | "right";
  tone: FeaturedTone;
  apps: { name: string; appStore: string }[];
  tags: ProjectTag[];
};

export const featuredDuo: FeaturedDuo = {
  name: "Nooli & Hungi",
  description:
    "Deux apps pour les personnes vivant avec l'anorexie : Nooli, compagnon émotionnel pour les moments difficiles, et Hungi, IA qui transforme votre frigo et votre humeur en recettes à cuisiner.",
  kicker: "Apps iOS",
  lightImage: "/nooli-hungi-light.png",
  darkImage: "/nooli-hungi-dark.png",
  imageAlt: "Écrans iPhone de Nooli et Hungi",
  imagePosition: "right",
  tone: "food",
  apps: [
    {
      name: "Nooli",
      appStore:
        "https://apps.apple.com/fr/app/nooli-compagnon-anorexie/id6784231162",
    },
    {
      name: "Hungi",
      appStore: "https://apps.apple.com/fr/app/hungi/id6780053204",
    },
  ],
  tags: [
    ["React Native", "https://reactnative.dev/"],
    ["Expo", "https://expo.dev/"],
    ["Uniwind", "https://uniwind.dev/"],
    ["Reanimated", "https://docs.swmansion.com/react-native-reanimated/"],
    ["Skia", "https://shopify.github.io/react-native-skia/"],
    ["AI SDK", "https://ai-sdk.dev/"],
    ["GPT", "https://openai.com/api/"],
    ["Spoonacular", "https://spoonacular.com/food-api"],
    ["TanStack Query", "https://tanstack.com/query"],
    ["BetterAuth", "https://www.better-auth.com/"],
    ["Drizzle", "https://orm.drizzle.team/"],
    ["PostgreSQL", "https://www.postgresql.org/"],
    ["Zod", "https://zod.dev/"],
    ["Express", "https://expressjs.com/"],
    ["Sentry", "https://sentry.io/"],
    ["PostHog", "https://posthog.com/"],
  ],
};

export const projects: Project[] = [
  {
    name: "MacGuffin",
    description:
      "App mobile pour découvrir les meilleurs films à voir au cinéma autour de soi, et réserver sa séance.",
    appStore: "https://mcgff.in/appstore",
    url: "https://mcgff.in/",
    featured: {
      kicker: "App iOS",
      lightImage: "/macguffin-light.png",
      darkImage: "/macguffin-dark.png",
      imageAlt: "Écrans iPhone de MacGuffin",
      imagePosition: "left",
      tone: "cinema",
      ctaLabel: "Télécharger sur l'App Store",
    },
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
      ["Sentry", "https://sentry.io/"],
      ["PostHog", "https://posthog.com/"],
    ],
  },
  {
    name: "PoppyDisk",
    description:
      "App desktop d'analyse de l'espace disque, avec carte radiale interactive, inspection des dossiers volumineux, et suppression sécurisée.",
    url: "https://poppydisk.com/",
    featured: {
      kicker: "App Windows",
      lightImage: "/poppydisk.png",
      darkImage: "/poppydisk.png",
      imageAlt: "Interface de PoppyDisk",
      imagePosition: "right",
      tone: "disk",
      ctaLabel: "Visiter le site",
    },
    tags: [
      ["Tauri", "https://v2.tauri.app/"],
      ["Rust", "https://www.rust-lang.org/"],
      ["Vite", "https://vite.dev/"],
      ["TanStack Router", "https://tanstack.com/router"],
      ["TanStack Query", "https://tanstack.com/query"],
      ["Zustand", "https://zustand.docs.pmnd.rs/"],
      ["Tailwind", "https://tailwindcss.com/"],
      ["Shadcn", "https://ui.shadcn.com/"],
      ["Polar", "https://polar.sh/"],
      ["Sentry", "https://sentry.io/"],
      ["PostHog", "https://posthog.com/"],
    ],
  },
  {
    name: "Chef",
    description:
      "SaaS de gestion automatisée des repas hospitaliers, respectant les normes d'équilibre nutritionnel, et les contraintes patient et métier.",
    url: "https://chef.florentklein.dev/",
    featured: {
      kicker: "SaaS",
      lightImage: "/chef-light.png",
      darkImage: "/chef-dark.png",
      imageAlt: "Interface de Chef affichée sur tablette",
      imagePosition: "left",
      tone: "health",
      ctaLabel: "Visiter le site",
    },
    tags: [
      ["Next.js", "https://nextjs.org/"],
      ["Tailwind", "https://tailwindcss.com/"],
      ["Shadcn", "https://ui.shadcn.com/"],
      ["Playwright", "https://playwright.dev/"],
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
    tags: [
      ["React Native", "https://reactnative.dev/"],
      ["Expo", "https://expo.dev/"],
      ["IA", "https://openai.com/"],
      ["BetterAuth", "https://www.better-auth.com/"],
      ["Drizzle", "https://orm.drizzle.team/"],
      ["PostgreSQL", "https://www.postgresql.org/"],
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
      ["TanStack Router", "https://tanstack.com/router"],
      ["TanStack Query", "https://tanstack.com/query"],
      ["TanStack Virtual", "https://tanstack.com/virtual"],
      ["Turborepo", "https://turborepo.com/"],
      ["Shadcn", "https://ui.shadcn.com/"],
      ["Vitest", "https://vitest.dev/"],
      ["Codex", "https://openai.com/codex/"],
    ],
  },
  {
    name: "Great Minds & Artguessr",
    description:
      "Deux jeux web : Great Minds teste votre complicité entre amis en temps réel, Artguessr votre intuition sur la date des œuvres d'art.",
    entries: [
      {
        name: "Great Minds",
        url: "https://greatminds.florentklein.dev/",
        github: "https://github.com/floklein/greatminds",
      },
      {
        name: "Artguessr",
        url: "https://artguessr.florentklein.dev/",
        github: "https://github.com/floklein/artguessr",
      },
    ],
    tags: [
      ["Vite", "https://vite.dev/"],
      ["Next.js", "https://nextjs.org/"],
      ["Tailwind", "https://tailwindcss.com/"],
      [
        "WebSocket",
        "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API",
      ],
      ["Colyseus", "https://www.colyseus.io/"],
      ["Motion", "https://motion.dev/"],
      ["TanStack Query", "https://tanstack.com/query"],
      ["Zustand", "https://zustand.docs.pmnd.rs/"],
      ["Zod", "https://zod.dev/"],
    ],
  },
  {
    name: "NatUI & git-agents",
    description:
      "Deux outils open source : un framework pour créer des apps desktop natives avec React, et une CLI qui synchronise vos skills et instructions IA via git.",
    entries: [
      {
        name: "NatUI",
        url: "https://natui.dev/",
        github: "https://github.com/floklein/natui",
      },
      {
        name: "git-agents",
        url: "https://www.npmjs.com/package/git-agents",
        github: "https://github.com/floklein/git-agents",
      },
    ],
    tags: [
      ["TypeScript", "https://www.typescriptlang.org/"],
      ["React", "https://react.dev/"],
      ["SwiftUI", "https://developer.apple.com/xcode/swiftui/"],
      ["WinUI 3", "https://learn.microsoft.com/en-us/windows/apps/winui/"],
      ["Claude Code", "https://www.anthropic.com/claude-code"],
      ["Codex", "https://openai.com/codex/"],
      ["Cursor", "https://cursor.com/"],
      ["Gemini CLI", "https://github.com/google-gemini/gemini-cli"],
      ["OpenCode", "https://opencode.ai/"],
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
      ["GPT", "https://openai.com/gpt-5/"],
      ["Tailwind", "https://tailwindcss.com/"],
      ["Shadcn", "https://ui.shadcn.com/"],
    ],
  },
];
