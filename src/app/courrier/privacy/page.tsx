import type { Metadata } from "next";
import Link from "next/link";

const contactEmail = "courrier@florentklein.dev";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Courrier",
  description:
    "Comment Courrier utilise les données de vos comptes Gmail et Outlook.",
  alternates: { canonical: "https://florentklein.dev/courrier/privacy" },
};

export default function CourrierPrivacyPage() {
  return (
    <main className="px-5 py-12 sm:px-8 sm:py-16">
      <article className="max-w-2xl">
        <Link className="text-sm underline underline-offset-4" href="/courrier">
          Courrier
        </Link>
        <h1 className="display mt-6 font-medium text-3xl sm:text-4xl">
          Politique de confidentialité
        </h1>
        <p className="mt-5 leading-relaxed">
          Florent Klein est le responsable du traitement des données de
          Courrier. Cette politique décrit les données utilisées lorsque vous
          connectez un compte Gmail ou Outlook à l’application de bureau.
        </p>
        <div className="mt-10 space-y-9 leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-medium text-xl">Accès à votre compte</h2>
            <p>
              Courrier utilise votre nom, votre adresse e-mail et votre
              identifiant de profil pour reconnaître le compte connecté.
              L’application lit vos dossiers ou libellés, messages, brouillons
              et pièces jointes afin de les afficher et de les rechercher. Elle
              utilise vos contacts et les suggestions de votre fournisseur pour
              compléter les adresses des destinataires.
            </p>
            <p>
              Lorsque vous agissez dans Courrier, l’application transmet vos
              demandes à Gmail ou Outlook pour enregistrer un brouillon,
              modifier l’état ou le classement d’un message, le placer dans la
              corbeille ou envoyer votre e-mail.
            </p>
            <p>
              Courrier utilise les données reçues des API Google pour les
              fonctions de messagerie décrites ici. Leur utilisation et leur
              transfert respectent les exigences d’utilisation limitée de la{" "}
              <a
                className="underline underline-offset-4"
                href="https://developers.google.com/terms/api-services-user-data-policy"
              >
                politique Google relative aux données utilisateur des services
                API
              </a>
              .
            </p>
          </section>
          <section className="space-y-3">
            <h2 className="font-medium text-xl">Stockage sur votre appareil</h2>
            <p>
              Courrier conserve les jetons de connexion sur votre appareil pour
              vous garder connecté. La configuration standard les protège avec
              le système d’exploitation. Une installation configurée
              explicitement pour fonctionner sans cette protection peut
              enregistrer les jetons dans un fichier non chiffré.
            </p>
            <p>
              L’application récupère le contenu des messages et des pièces
              jointes directement auprès de votre fournisseur. L’ouverture d’une
              pièce jointe crée une copie temporaire sur l’appareil. Si vous la
              téléchargez, vous choisissez où enregistrer le fichier. Les images
              distantes intégrées aux messages peuvent être demandées aux
              serveurs qui les hébergent.
            </p>
          </section>
          <section className="space-y-3">
            <h2 className="font-medium text-xl">
              Mises à jour de la boîte mail
            </h2>
            <p>
              Le relais hébergé de Courrier traite les notifications émises par
              Microsoft Graph lorsque les mises à jour Outlook sont configurées.
              Elles contiennent des identifiants et le type de changement.
              L’application utilise ces signaux pour actualiser la boîte mail
              auprès de votre fournisseur.
            </p>
            <p>
              Pour les installations qui activent les notifications Gmail,
              Google Cloud Pub/Sub reçoit l’adresse du compte et un identifiant
              d’historique de la boîte. La souscription du projet peut conserver
              les notifications en attente jusqu’à 31 jours.
            </p>
            <p>
              Le relais conserve ses inscriptions et une file limitée
              d’événements en mémoire. En cas d’erreur, ses journaux peuvent
              inclure certaines données de notification. Les journaux sont
              conservés sur l’hôte du relais. La rotation conserve jusqu’à trois
              fichiers de 10 Mo chacun et remplace les plus anciens.
            </p>
          </section>
          <section className="space-y-3">
            <h2 className="font-medium text-xl">Déconnexion et contact</h2>
            <p>
              Pour déconnecter un compte, retirez-le de Courrier et révoquez
              l’accès de l’application dans les paramètres de votre compte
              Google ou Microsoft. Vos messages chez votre fournisseur restent
              dans votre boîte. Les pièces jointes téléchargées restent sur
              votre appareil jusqu’à ce que vous les supprimiez.
            </p>
            <p>
              Les messages que vous envoyez au support servent à répondre à
              votre demande et à en assurer le suivi. Namecheap transmet les
              messages entrants à la boîte Gmail utilisée pour le support.
              Resend achemine les réponses.
            </p>
            <p>
              Les échanges avec le support sont conservés pendant le traitement
              de votre demande, puis jusqu’à 12 mois après sa clôture. Ils
              peuvent être conservés plus longtemps si une obligation légale
              l’exige ou si le traitement d’un litige le nécessite.
            </p>
            <p>
              Pour exercer vos droits sur vos données ou poser une question,
              écrivez à{" "}
              <a
                className="break-all underline underline-offset-4"
                href={`mailto:${contactEmail}`}
              >
                {contactEmail}
              </a>
              .
            </p>
            <p>
              Selon votre situation, vous pouvez demander l’accès, la
              rectification, l’effacement ou la portabilité de vos données,
              demander une limitation du traitement ou vous y opposer. Vous
              pouvez aussi déposer une réclamation auprès de la CNIL.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
