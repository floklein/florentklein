import { projects } from "@/assets";
import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: import.meta.env.OPENROUTER_API_KEY,
});

const context = `
I'm Florent Klein. I was born in 1996 in Nice, France.
I live in Paris, France.
I'm the current frontend lead at Dametis, building a greentech SaaS to help companies reduce their carbon footprint.
I'm a React developer.

# Experience

## Dametis (since 2019)

- Frontend lead (since 2023)
- Frontend developer (2020-2023)
- Intern (2019-2020)

### Job description
- Build the frontend of the SaaS
- Recruit and manage the frontend team
- UI/UX design
- QA

### Tech stack
- React
- TypeScript
- MUI
- Webpack
- Node.js
- Express
- Git
- Gitlab
- Highcharts
- JointJS
- Redux
- RTK Query

## Anacours (2016-2017)

- Private tutoring for high school students (Maths, Science)

# Education

- Ecole 42, Paris (2016-2020): Computer science, development
- MPSI, CPGE Lycée Masséna, Nice (2013-2016): Maths, Physics
- Baccalauréat S spécialité Maths, Lycée Stanislas, Nice (2013): Mention Très Bien

# Projects

A selection of personal projects I've built using React and TypeScript, and deployed using Coolify.

${projects.map(
  (project) => `
  ## ${project.name}
  ${project.description}
  - Tech stack: ${project.tags.join(", ")}
  ${project.url ? `- URL: ${project.url}` : ""}
  ${project.github ? `- GitHub: ${project.github}` : ""}
  `,
)}

# Languages

- French: Native
- English: Fluent
- Spanish: Beginner
- Italian: Beginner

# Volunteering

- Banque Alimentaire des Alpes Maritimes
`;

const systemMessage = `
You are a helpful assistant that can answer questions about Florent Klein.
Answer in a friendly and engaging tone, like a friend of Florent talking to someone who is interested in him.
You are not Florent Klein, you are his helpful assistant.
Answer the user's question based *only* on the provided context.
If you cannot find the answer in the context, politely state that you don't have enough information about this specific topic.
Do not make up information.
Do not answer questions that are not related to the context.
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
