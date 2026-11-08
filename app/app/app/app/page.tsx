import { LIEN_PAIEMENT, EMAIL_CONTACT } from "./config";

const etapes = [
  { nom: "Reçu", couleur: "text-gris" },
  { nom: "En cours", couleur: "text-tomate" },
  { nom: "Prêt", couleur: "text-encre" },
  { nom: "Livré", couleur: "text-sapin" },
];

const benefices = [
  {
    titre: "Un lien, zéro mot de passe",
    texte:
      "Tu envoies un lien à ton client. Il l'ouvre sur son téléphone et voit où en est son projet. C'est tout.",
  },
  {
    titre: "Quatre étapes, claires pour tout le monde",
    texte:
      "Reçu, en cours, prêt, livré. Ton client sait toujours où ça en est, sans avoir à te demander.",
  },
  {
    titre: "Il est prévenu tout seul",
    texte:
      "À chaque étape franchie, ton client reçoit un email. Les fichiers et les aperçus sont au même endroit, pas éparpillés dans WhatsApp.",
  },
];

const faq = [
  {
    q: "Est-ce que ça marche pour mon métier ?",
    r: "Si tu livres en plusieurs jours (vidéo UGC, montage, graphisme, shooting, gestion de réseaux), oui. Un projet = un lien, quel que soit le livrable.",
  },
  {
    q: "Combien de temps ça me prend ?",
    r: "Moins d'une minute pour créer un projet, quelques secondes pour changer d'étape. C'est moins long qu'un appel.",
  },
  {
    q: "Et si je veux arrêter ?",
    r: "Tu résilies quand tu veux, sans engagement. Et pendant 30 jours après ton premier paiement, tu es remboursé(e) en entier sur simple email.",
  },
  {
    q: "Je paie pour quoi, exactement ?",
    r: "Pour des projets illimités, chacun avec son lien de suivi, ses fichiers et ses notifications automatiques à ton client.",
  },
];

function BoutonPrincipal({ texte }: { texte: string }) {
  return (
    <a
      href={LIEN_PAIEMENT}
      className="flex min-h-14 w-full items-center justify-center rounded-xl bg-tomate px-6 text-center font-titre text-lg font-extrabold text-papier shadow-[0_4px_0_#1c1b19] transition active:translate-y-1 active:shadow-none"
    >
      {texte}
    </a>
  );
}

export default function Accueil() {
  return (
    <main className="mx-auto max-w-xl px-5 pb-12">
      {/* En-tête */}
      <header className="flex items-center justify-between py-5">
        <span className="font-titre text-2xl font-extrabold tracking-tight">Vitrine</span>
        <span className="text-sm text-gris">Pour les pros du contenu</span>
      </header>

      {/* Promesse — reprise mot pour mot dans les vidéos */}
      <section className="pt-4">
        <h1 className="font-titre text-[2.6rem] font-extrabold leading-[1.02] tracking-tight">
          Tes clients n&apos;ont plus besoin de t&apos;appeler pour savoir où ça en est.
        </h1>
        <p className="mt-4 text-lg leading-snug text-gris">
          Un lien par projet. Ton client suit l&apos;avancement, toi tu restes concentré(e) sur ton
          travail.
        </p>

        {/* Exemple de dossier, avec les tampons */}
        <div className="mt-7 rounded-2xl border-2 border-encre bg-white p-5">
          <div className="flex items-baseline justify-between text-sm">
            <span className="text-gris">Projet n° 042</span>
            <span className="text-gris">mis à jour il y a 2 h</span>
          </div>
          <p className="mt-1 font-titre text-xl font-bold">3 vidéos UGC — Marque de soin</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {etapes.map((e, i) => (
              <span
                key={e.nom}
                className={`tampon ${e.couleur} ${i > 1 ? "opacity-25" : ""}`}
              >
                {e.nom}
              </span>
            ))}
          </div>
          <p className="mt-4 border-t border-dashed border-papier-fonce pt-3 text-sm">
            <span className="font-semibold">Dernière note :</span> montage de la vidéo 2 terminé,
            aperçu ajouté. Livraison prévue jeudi.
          </p>
        </div>

        <div className="mt-6">
          <BoutonPrincipal texte="Réserver mon accès fondateur" />
          <p className="mt-2 text-center text-sm text-gris">
            Rien à payer pendant 3 semaines · Sans engagement
          </p>
        </div>
      </section>

      {/* La douleur, chiffrée */}
      <section className="mt-14 rounded-2xl bg-encre p-6 text-papier">
        <p className="font-titre text-sm font-bold uppercase tracking-widest text-tomate">
          Fais le calcul
        </p>
        <p className="mt-3 font-titre text-2xl font-bold leading-tight">
          10 projets par mois, 4 appels « alors, ça avance ? » par projet…
        </p>
        <p className="mt-3 text-lg leading-snug">
          …ça fait <strong className="text-tomate">40 interruptions</strong>. Avec 15 minutes pour
          te remettre dedans à chaque fois, c&apos;est <strong className="text-tomate">10 heures
          perdues</strong> chaque mois. Et rien de ce que tu as dit au téléphone n&apos;est écrit
          nulle part.
        </p>
      </section>

      {/* Trois bénéfices */}
      <section className="mt-14">
        <h2 className="font-titre text-3xl font-extrabold tracking-tight">Ce qui change</h2>
        <ol className="mt-6 space-y-6">
          {benefices.map((b, i) => (
            <li key={b.titre} className="flex gap-4">
              <span className="font-titre text-3xl font-extrabold text-tomate">{i + 1}</span>
              <div>
                <h3 className="font-titre text-xl font-bold">{b.titre}</h3>
                <p className="mt-1 leading-snug text-gris">{b.texte}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* L'offre fondateur */}
      <section id="offre" className="mt-14 scroll-mt-6 rounded-2xl border-2 border-encre bg-white p-6">
        <span className="tampon text-sapin">Accès fondateur</span>
        <p className="mt-4 font-titre text-5xl font-extrabold tracking-tight">
          49 €<span className="text-xl font-bold text-gris"> / mois</span>
        </p>
        <p className="mt-1 text-gris">soit 1,63 € par jour, moins qu&apos;un café</p>

        <ul className="mt-5 space-y-2 leading-snug">
          <li>— Projets illimités, un lien de suivi par projet</li>
          <li>— Fichiers et aperçus déposés au fil de l&apos;eau</li>
          <li>— Email automatique à ton client à chaque étape</li>
          <li>— Ton compte configuré avec toi, en direct</li>
        </ul>

        <div className="mt-5 rounded-xl bg-papier p-4 text-sm leading-snug">
          <p className="font-semibold">Rien à payer pendant 3 semaines.</p>
          <p className="mt-1">
            Vitrine ouvre dans 3 semaines. Tu réserves ta place aujourd&apos;hui, ton premier
            paiement n&apos;arrive qu&apos;après.
          </p>
        </div>

        <div className="mt-4 rounded-xl border-2 border-sapin p-4 text-sm leading-snug">
          <p className="font-titre font-bold text-sapin">Satisfait(e) ou remboursé(e), 30 jours</p>
          <p className="mt-1">
            Dans les 30 jours qui suivent ton premier paiement, écris à {EMAIL_CONTACT}. Je lance le
            remboursement complet sous 48 h, sans question. Il apparaît sur ton compte sous 5 à 10
            jours.
          </p>
        </div>

        <div className="mt-6">
          <BoutonPrincipal texte="Réserver mon accès" />
          <p className="mt-2 text-center text-sm text-gris">Sans engagement, résiliable à tout moment</p>
        </div>
      </section>

      {/* Questions fréquentes */}
      <section className="mt-14">
        <h2 className="font-titre text-3xl font-extrabold tracking-tight">Questions fréquentes</h2>
        <div className="mt-4 divide-y divide-papier-fonce border-y border-papier-fonce">
          {faq.map((f) => (
            <details key={f.q} className="py-4">
              <summary className="flex min-h-11 items-center justify-between gap-4 font-titre text-lg font-bold">
                {f.q}
                <span className="plus text-2xl text-tomate transition">+</span>
              </summary>
              <p className="mt-2 leading-snug text-gris">{f.r}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="mt-14 border-t border-papier-fonce pt-6 text-sm text-gris">
        <p>Vitrine — le suivi client qui remplace les appels.</p>
        <p className="mt-1">Contact : {EMAIL_CONTACT}</p>
      </footer>
    </main>
  );
}
