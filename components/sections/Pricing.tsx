"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PLANS = [
  {
    name: "Solo",
    price: "299",
    clients: "50",
    description: "Pour les cabinets de moins de 5 collaborateurs.",
    features: [
      "Jusqu'à 50 clients surveillés",
      "Rapport hebdomadaire Bastien",
      "Chat conversationnel illimité",
      "Emails pré-rédigés automatiques",
      "Upload FEC (tous logiciels)",
      "4€/mois par client supplémentaire",
    ],
    cta: "Faire entrer Bastien",
    highlight: false,
    accent: "#3B82F6",
  },
  {
    name: "Cabinet",
    price: "599",
    clients: "200",
    description: "Pour les cabinets établis avec un portefeuille PME significatif.",
    features: [
      "Jusqu'à 200 clients surveillés",
      "Tout Solo, plus :",
      "Branding Bastien personnalisé",
      "Ton et prénom personnalisables",
      "Rapports PDF aux couleurs du cabinet",
      "3€/mois par client supplémentaire",
    ],
    cta: "Faire entrer Bastien",
    highlight: true,
    accent: "#6366f1",
  },
  {
    name: "Premium",
    price: "999",
    clients: "500",
    description: "Pour les cabinets avec de grands portefeuilles PME.",
    features: [
      "Jusqu'à 500 clients surveillés",
      "Tout Cabinet, plus :",
      "Accompagnement onboarding dédié",
      "SLA et support prioritaire",
      "Export données & rapports",
      "2€/mois par client supplémentaire",
    ],
    cta: "Contacter l'équipe",
    highlight: false,
    accent: "#8B5CF6",
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="tarifs" className="section-py" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div
            className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full mb-6"
            style={{
              background: "rgba(59,130,246,0.1)",
              border: "1px solid rgba(59,130,246,0.25)",
              color: "#60A5FA",
            }}
          >
            Tarifs
          </div>
          <h2
            className="font-bold tracking-tight mb-4"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", color: "var(--text)" }}
          >
            Moins qu'un stagiaire une journée par semaine.
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "var(--muted)" }}>
            Bastien travaille pour vous 24h/24, 7j/7, analyse tous vos clients chaque mois,
            et ne prend jamais de congés.
          </p>
        </motion.div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-5">
          {PLANS.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.12 }}
              className="relative rounded-2xl p-6 flex flex-col"
              style={
                plan.highlight
                  ? {
                      background:
                        "linear-gradient(135deg, rgba(99,102,241,0.12) 0%, rgba(59,130,246,0.08) 100%)",
                      border: `1px solid rgba(99,102,241,0.35)`,
                      boxShadow: "0 0 40px rgba(99,102,241,0.12)",
                    }
                  : {
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }
              }
            >
              {plan.highlight && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold px-3 py-1 rounded-full"
                  style={{
                    background: "linear-gradient(135deg, #6366f1, #3B82F6)",
                    color: "white",
                  }}
                >
                  Le plus populaire
                </div>
              )}

              <div className="mb-5">
                <div className="font-semibold text-base mb-1" style={{ color: "var(--text)" }}>
                  {plan.name}
                </div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span
                    className="text-4xl font-black"
                    style={{ color: "var(--text)" }}
                  >
                    {plan.price}€
                  </span>
                  <span style={{ color: "var(--muted)" }}>/mois</span>
                </div>
                <p className="text-xs" style={{ color: "var(--muted)" }}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-2.5 flex-1 mb-6">
                {plan.features.map((f, fi) => (
                  <li
                    key={fi}
                    className="flex items-start gap-2 text-sm"
                    style={{
                      color: fi === 1 && plan.name !== "Solo" ? "var(--muted)" : "var(--muted-light)",
                      fontStyle: fi === 1 && plan.name !== "Solo" ? "italic" : "normal",
                    }}
                  >
                    {fi === 1 && plan.name !== "Solo" ? (
                      <span className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>⋯</span>
                    ) : (
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={plan.accent}
                        strokeWidth="2.5"
                        className="mt-0.5 shrink-0"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    )}
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="block text-center py-3 rounded-xl text-sm font-semibold transition-all duration-200"
                style={
                  plan.highlight
                    ? {
                        background: "linear-gradient(135deg, #6366f1, #3B82F6)",
                        color: "white",
                        boxShadow: "0 0 20px rgba(99,102,241,0.3)",
                      }
                    : {
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "var(--text)",
                      }
                }
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Note soft cap */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-xs mt-6"
          style={{ color: "var(--muted)" }}
        >
          Pas de blocage au-delà du quota. Facturation au client supplémentaire via Stripe.
          Pas d'engagement de durée. Résiliation en 1 clic.
        </motion.p>
      </div>
    </section>
  );
}
