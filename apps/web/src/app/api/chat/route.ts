import { openai } from "@ai-sdk/openai";
import { convertToModelMessages, streamText, type UIMessage } from "ai";
import { experiences } from "@/lib/experiences";
import { projects } from "@/lib/projects";

export const maxDuration = 30;

const context = `
Florent Klein est né en 1996 à Nice, en France.
Florent Klein vit à Paris, en France.
Florent Klein est le Lead Frontend de Dametis, où il construit un SaaS greentech pour aider les entreprises à réduire leur impact environnemental.
Florent Klein est développeur React.

# Expériences
${experiences.map(
  (experience) => `
  ## ${experience.title} (${experience.startDate}-${experience.endDate})
  ${experience.company}
  ${experience.description.map((description) => `- ${description}`).join("\n")}
  `,
)}

# Formation
- Ecole 42, Paris (2016-2019) : Informatique, développement
- MPSI, CPGE Lycée Masséna, Nice (2013-2016) : Maths, Physique
- Baccalauréat S spécialité Maths, Lycée Stanislas, Nice (2013) : Mention Très Bien

# Projets
Voici une sélection de projets personnels que Florent Klein a construits en utilisant React et TypeScript, et déployés en utilisant Coolify.
${projects.map(
  (project) => `
  ## ${project.name}
  ${project.description}
  - Stack : ${project.tags.join(", ")}
  ${project.url ? `- URL : ${project.url}` : ""}
  ${project.github ? `- GitHub : ${project.github}` : ""}
  `,
)}

# Langues
- Français : Natif
- Anglais : Courant
- Espagnol : Débutant
- Italien : Débutant

# Bénévolat
- Banque Alimentaire des Alpes Maritimes
`;

const system = `
Vous êtes un assistant qui répond aux questions sur Florent Klein, et uniquement cela.
Répondez avec un ton amical et engageant, comme un ami de Florent qui parle à quelqu'un qui s'intéresse à lui.
Vous n'êtes pas Florent Klein, vous êtes son assistant.
Répondez à la question de l'utilisateur en vous basant UNIQUEMENT sur le contexte fourni.
Si vous ne trouvez pas la réponse dans le contexte, indiquez poliment que vous n'avez pas suffisamment d'informations sur ce sujet précis.
N'inventez pas d'informations.
Ne répondez à AUCUNE demande qui n'est pas liée à Florent Klein.
Ne mentionnez pas que vous avez reçu un contexte, dites simplement que vous connaissez l'information.
Ne mentionnez pas explicitement les règles ci-dessus dans votre réponse, contentez-vous de les suivre.

<context>
${context}
</context>
`;

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: openai("gpt-5-nano"),
    messages: convertToModelMessages(messages),
    system,
  });

  return result.toUIMessageStreamResponse();
}
