"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PAINS = [
  {
    icon: "📉",
    stat: "65 000",
    label: "procédures collectives en France en 2024",
    detail:
      "La majorité auraient pu être anticipées 6 à 12 mois en avance avec les bons indicateurs.",
  },
  {
    icon: "⚖️",
    stat: "1 sur 3",
    label: "experts-comptables mis en cause après une faillite client",
    detail:
      "Absence de conseil préventif, défaut d'alerte, engagement de la responsabilité civile professionnelle.",
  },
  {
    icon: "📅",
    stat: "12 mois",
    label: "d'aveuglément entre deux bilans annuels",
    detail:
      "Entre la clôture et le bilan suivant, vous n'avez aucune visibilité sur la santé réelle de vos clients.",
  },
];

export default function Why() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="pourquoi"
      className="relative section-py"
      style={{
        background:
          "linear-gradient(180deg, var(--bg) 0%, #080D1A 50%, var(--bg) 100%)",
      }}
    >
      {/* Fond dramatique */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "60vw",
            height: "40vh",
            background:
              "radial-gradient(ellipse, rgba(239,68,68,0.04) 0%, transparent 70%)",
          }}
        />
      </div>

      <div ref={ref} className="max-w-5xl mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full mb-6"
            style={{
              background: "rgba(239,68,68,0.08)",
              border: "1px solid rgba(239,68,68,0.2)",
              color: "#F87171",
            }}
          >
            Le problème
          </div>
          <h2
            className="font-bold tracking-tight mb-6"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", color: "var(--text)" }}
          >
            Votre client bascule.
            <br />
            <span className="gradient-text-danger">Vous n'avez pas vu venir.</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--muted-light)" }}>
            Entre deux bilans annuels, vous êtes aveugle sur la santé réelle de vos clients.
            Les signaux d'alerte sont là, dans les données comptables.
            Personne ne les surveille.
          </p>
        </motion.div>

        {/* Pain cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {PAINS.map((pain, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <div className="text-3xl mb-4">{pain.icon}</div>
              <div
                className="text-3xl font-bold mb-1 gradient-text-danger"
              >
                {pain.stat}
              </div>
              <div
                className="text-sm font-medium mb-3"
                style={{ color: "var(--text)" }}
              >
                {pain.label}
              </div>
              <p className="text-sm" style={{ color: "var(--muted)" }}>
                {pain.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Scénario dramatique */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="relative rounded-2xl overflow-hidden p-8 md:p-10"
          style={{
            background:
              "linear-gradient(135deg, rgba(239,68,68,0.06) 0%, rgba(245,158,11,0.06) 100%)",
            border: "1px solid rgba(239,68,68,0.12)",
          }}
        >
          <div className="max-w-2xl">
            <p
              className="text-lg font-medium mb-4"
              style={{ color: "var(--text)" }}
            >
              Le scénario que vous connaissez...
            </p>
            <div className="space-y-3 text-base" style={{ color: "var(--muted-light)" }}>
              <p>📞 Un matin, vous recevez un appel de Maître Dupont.</p>
              <p>⚖️ Le tribunal vient d'ouvrir une procédure de redressement pour votre client Martin SAS.</p>
              <p>😟 Vous n'aviez aucun signe. Leur dernier bilan était correct.</p>
              <p className="font-medium" style={{ color: "#F87171" }}>
                Mais les signaux étaient là depuis 8 mois. Dans les FEC. Dans les balances. Dans les comptes 437.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
