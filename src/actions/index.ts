import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: import.meta.env.OPENROUTER_API_KEY,
});

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
        messages,
      });
      return response.choices[0].message.content ?? "";
    },
  }),
};
