"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PRINCIPLES = [
  {
    number: "01",
    title: "Pas un outil. Un collaborateur.",
    body: "Bastien a un nom, un ton, une fréquence de communication. Il signe ses emails. Il rejoint l'équipe de votre cabinet comme un collaborateur dédié à la veille — 24h/24, 7j/7.",
    accent: "#3B82F6",
  },
  {
    number: "02",
    title: "Données internes, pas publiques.",
    body: "Le BODACC et les privilèges Trésor arrivent trop tard. Bastien travaille sur les FEC de vos clients : balances âgées, DPO, DSO, retards sur les comptes 421, 437, 444. Les vrais signaux précoces.",
    accent: "#6366f1",
  },
  {
    number: "03",
    title: "Croisement intelligent de signaux.",
    body: "Un signal isolé, c'est du bruit. DPO en hausse + retard URSSAF + trésorerie négative = quasi-certitude. Bastien ne sonne l'alarme que quand il a de bonnes raisons.",
    accent: "#8B5CF6",
  },
  {
    number: "04",
    title: "Transparence probabiliste, toujours.",
    body: "Bastien ne dit jamais « ce client va faire faillite ». Il dit « ces trois signaux convergents méritent votre attention ». 4 niveaux : Vigilance, Attention, Risque élevé, Critique.",
    accent: "#10B981",
  },
  {
    number: "05",
    title: "Action, pas seulement information.",
    body: "Pour chaque client à risque : un email pré-rédigé prêt à envoyer, un canevas de RDV, des recommandations d'action (conciliation, mandat ad hoc). Vous n'avez qu'à valider.",
    accent: "#F59E0B",
  },
];

export default function How() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="comment" className="section-py" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
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
              background: "rgba(99,102,241,0.1)",
              border: "1px solid rgba(99,102,241,0.25)",
              color: "#818CF8",
            }}
          >
            L'approche
          </div>
          <h2
            className="font-bold tracking-tight mb-4"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", color: "var(--text)" }}
          >
            Ce qui fait de Bastien
            <br />
            <span className="gradient-text">un collaborateur, pas un outil.</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "var(--muted)" }}>
            Cinq principes non négociables qui définissent comment Bastien travaille pour vous.
          </p>
        </motion.div>

        {/* Principles */}
        <div className="space-y-4">
          {PRINCIPLES.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.1 }}
              className="glass rounded-2xl p-6 md:p-8 flex gap-6 items-start group hover:border-opacity-20 transition-all duration-300"
              style={{
                borderColor: `rgba(${hexToRgb(p.accent)}, 0.12)`,
              }}
            >
              {/* Number */}
              <div
                className="text-3xl font-black shrink-0 leading-none"
                style={{ color: p.accent, opacity: 0.4 }}
              >
                {p.number}
              </div>
              <div>
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: "var(--text)" }}
                >
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted-light)" }}>
                  {p.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return "255,255,255";
  return `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}`;
}
