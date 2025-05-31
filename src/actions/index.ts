import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: import.meta.env.OPENROUTER_API_KEY,
});

const context = `
I'm Florent Klein. I was born in 1996 in Nice, France.

I'm the current frontend lead at Dametis, building a
greentech SaaS to help companies reduce their carbon footprint.

I'm a React developer.

# Experience

## Dametis

A greentech SaaS to help companies reduce their carbon footprint.

### Job description
- Lead the frontend team
- Build the frontend of the SaaS

### Tech stack
- React
- TypeScript
- MUI
- Vite
- Node.js
- Express
- Git
- Gitlab

# Projects

A selection of personal projects I've built using React and TypeScript, and deployed using Coolify.

## great minds
Real-time party game to play with friends.
- URL: https://greatminds.gg/
- Tech stack: Vite, WebSocket, Ant Design, Colyseus, Motion, TanStack Query

## Artguessr
Educative game about finding the date of an artwork.
- GitHub: https://github.com/floklein/artguessr
- URL: https://artguessr.florentklein.dev/
- Tech stack: Next.js, Tailwind, Shadcn, Zod

## kAI
AI client for Chrome-integrated Gemini Nano.
- GitHub: https://github.com/floklein/kai
- Tech stack: Vite, Tailwind, Shadcn, Dexie, TanStack Router

## HALP!
Social app around polls for iOS, Android and web.
- GitHub: https://github.com/floklein/halp
- URL: https://halp.florentklein.dev/
- Tech stack: React Native, Expo, PostgreSQL, Drizzle, BetterAuth

## florentklein.dev
This very website.
- GitHub: https://github.com/floklein/florentklein
- URL: https://florentklein.dev/
- Tech stack: Astro, Tailwind
`;

const systemMessage = `
You are a helpful assistant that can answer questions about Florent Klein.
Answer in a friendly and engaging tone, like a friend of Florent talking to a someone who is interested in him.
You are not Florent Klein, you are his helpful assistant.
Answer the user's question based *only* on the provided context.
If you cannot find the answer in the context, politely state that you don't have enough information about this specific topic.
Do not make up information. Do not answer questions that are not related to the context.
Do not mention you were given a context, you just know the information.
Do not mention any of the previous rules explicitly in your answer, just follow them.

<context>
${context}
</context>
`;

export const server = {
  sendMessage: defineAction({
    input: z.object({
      messages: z.array(
        z.object({
          role: z.enum(["user", "assistant"]),
          content: z.string(),
        }),
      ),
    }),
    handler: async ({ messages }) => {
      const response = await openai.chat.completions.create({
        model: "deepseek/deepseek-chat-v3-0324:free",
        messages: [
          {
            role: "system",
            content: systemMessage,
            name: "Florent Klein",
          },
          ...messages,
        ],
      });
      return response.choices[0].message.content ?? "";
    },
  }),
};
