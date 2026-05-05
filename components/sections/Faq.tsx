"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    q: "Bastien fonctionne avec quel logiciel comptable ?",
    a: "Avec tous. Bastien se nourrit du FEC (Fichier des Écritures Comptables), format normalisé obligatoire pour tous les logiciels comptables en France (Pennylane, Cegid, Sage, ACD, MyUnisoft, etc.). Vous exportez le FEC depuis votre logiciel, vous l'uploadez sur la plateforme — 5 minutes, une fois par mois.",
  },
  {
    q: "Où sont hébergées les données de mes clients ?",
    a: "En France et en Europe uniquement. Compute : Clever Cloud Paris. Storage : Scaleway Paris. Base de données : Supabase Frankfurt (UE). IA : Mistral AI Paris. Aucun transfert hors UE. Bastien est le seul collaborateur IA pour EC entièrement hébergé sur des infrastructures souveraines françaises.",
  },
  {
    q: "Quid du RGPD ? Qui est responsable des données ?",
    a: "Veillor est sous-traitant RGPD, votre cabinet est responsable de traitement. Nous fournissons un contrat de sous-traitance (DPA) et un avenant à votre lettre de mission client, clé en main. Vos données sont isolées par cabinet (Row Level Security), jamais partagées entre cabinets, supprimées en 30 jours à la résiliation.",
  },
  {
    q: "Bastien remplace-t-il mes collaborateurs ?",
    a: "Non. Bastien fait la veille et prépare l'action — il ne prend pas de décisions. Vous restez le conseil de confiance de vos clients. Bastien vous libère du temps de surveillance pour que vous puissiez vous concentrer sur ce que vous faites le mieux : le conseil à haute valeur ajoutée.",
  },
  {
    q: "Bastien peut-il se tromper ?",
    a: "Oui, et il le sait. Bastien ne prétend jamais à la certitude. Il classe ses alertes en 4 niveaux (Vigilance, Attention, Risque élevé, Critique) et affiche systématiquement les signaux qui ont déclenché l'alerte, avec les valeurs exactes. Vous voyez pourquoi Bastien alerte, vous gardez votre jugement.",
  },
  {
    q: "Combien de temps prend l'onboarding ?",
    a: "Bastien est opérationnel le jour même. Création du compte et paramétrage (nom, logo, ton) : 15 minutes. Premier dépôt de FEC : 30 min à 2h selon le volume de clients à surveiller. Un appel d'accompagnement de 30 min est proposé pour le premier dépôt.",
  },
  {
    q: "Que se passe-t-il si je résilie ?",
    a: "Pas d'engagement de durée. Vous résiliez en 1 clic depuis l'app. Vos données sont exportables pendant 30 jours (archive ZIP : FEC originaux, rapports PDF, logs d'alertes), puis supprimées définitivement à J+30.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="rounded-xl overflow-hidden transition-all duration-200"
      style={{
        background: open ? "rgba(59,130,246,0.05)" : "rgba(255,255,255,0.03)",
        border: open
          ? "1px solid rgba(59,130,246,0.2)"
          : "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="font-medium text-sm" style={{ color: "var(--text)" }}>
          {q}
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="shrink-0 transition-transform duration-300"
          style={{
            color: open ? "#60A5FA" : "var(--muted)",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <p
              className="px-5 pb-4 text-sm leading-relaxed"
              style={{ color: "var(--muted-light)" }}
            >
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-py" ref={ref}>
      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2
            className="font-bold tracking-tight mb-3"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", color: "var(--text)" }}
          >
            Questions fréquentes
          </h2>
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            Tout ce que votre associé va vous demander avant de valider.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-2.5"
        >
          {FAQS.map((faq, i) => (
            <FaqItem key={i} {...faq} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
