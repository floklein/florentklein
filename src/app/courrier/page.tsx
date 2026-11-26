import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Courrier — Client mail pour macOS et Windows",
  description:
    "Consultez et gérez vos comptes Gmail et Outlook depuis Courrier.",
  alternates: { canonical: "https://florentklein.dev/courrier" },
};

export default function CourrierPage() {
  return (
    <main className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="max-w-2xl">
        <h1 className="display font-medium text-4xl sm:text-5xl">Courrier</h1>
        <p className="mt-5 text-lg leading-relaxed">
          Un client mail pour macOS et Windows. Connectez vos comptes Gmail et
          Outlook pour lire, rechercher, organiser et envoyer vos messages au
          même endroit.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild>
            <Link href="https://github.com/floklein/courrier">
              Voir le code source
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/courrier/privacy">Politique de confidentialité</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
