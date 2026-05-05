"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import BastienAvatar from "@/components/BastienAvatar";

const TABS = [
  { id: "rapport", label: "Le rapport du lundi" },
  { id: "chat", label: "Le chat avec Bastien" },
  { id: "email", label: "L'email pré-rédigé" },
];

function ReportDemo() {
  return (
    <div
      className="rounded-2xl overflow-hidden text-sm font-mono"
      style={{
        background: "#0D1117",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* Email header */}
      <div
        className="px-5 py-3.5 flex items-center gap-3 text-xs"
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          color: "var(--muted)",
        }}
      >
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full" style={{ background: "#EF4444" }} />
          <span className="w-3 h-3 rounded-full" style={{ background: "#F59E0B" }} />
          <span className="w-3 h-3 rounded-full" style={{ background: "#10B981" }} />
        </div>
        <span>De : bastien@cabinet-moreau.fr · Lundi 04 nov. 2026, 07:00</span>
      </div>

      <div className="p-5 md:p-7 space-y-4" style={{ fontFamily: "inherit" }}>
        <p style={{ color: "var(--muted-light)" }}>Bonjour Sophie,</p>
        <p style={{ color: "var(--text)" }}>
          Voici mon rapport de la semaine pour le Cabinet Moreau & Associés.
        </p>

        {/* Summary bar */}
        <div
          className="rounded-xl p-4 flex flex-wrap gap-4 text-xs"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full" style={{ background: "#EF4444" }} />
            <span style={{ color: "#F87171" }}>1 Critique</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full" style={{ background: "#F59E0B" }} />
            <span style={{ color: "#FCD34D" }}>2 Risque élevé</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full" style={{ background: "#3B82F6" }} />
            <span style={{ color: "#93C5FD" }}>3 Attention</span>
          </div>
          <div className="ml-auto" style={{ color: "var(--muted)" }}>
            178 clients analysés
          </div>
        </div>

        {/* Critical client */}
        <div
          className="rounded-xl p-4 space-y-2.5"
          style={{
            background: "rgba(239,68,68,0.06)",
            border: "1px solid rgba(239,68,68,0.15)",
          }}
        >
          <div className="flex items-center gap-2">
            <span
              className="text-xs font-bold px-2 py-0.5 rounded-full"
              style={{ background: "rgba(239,68,68,0.15)", color: "#F87171" }}
            >
              🔴 CRITIQUE
            </span>
            <span className="font-semibold" style={{ color: "var(--text)" }}>
              DUPONT SAS — SIREN 823 456 789
            </span>
          </div>
          <div className="text-xs space-y-1.5" style={{ color: "var(--muted-light)" }}>
            <p>⚠️ DPO : <strong className="text-white">127 jours</strong> (↑ +34j vs. mois dernier · secteur BTP : 72j)</p>
            <p>⚠️ Retard URSSAF : <strong className="text-white">73 jours</strong> non lettrés compte 437</p>
            <p>⚠️ Balance âgée fournisseurs &gt;60j : <strong className="text-white">58%</strong> du total</p>
          </div>
          <div
            className="text-xs mt-2 pt-2"
            style={{ borderTop: "1px solid rgba(239,68,68,0.15)", color: "#10B981" }}
          >
            → Email de prise de contact pré-rédigé disponible · Canevas RDV joint
          </div>
        </div>

        {/* High risk client */}
        <div
          className="rounded-xl p-4 space-y-2"
          style={{
            background: "rgba(245,158,11,0.05)",
            border: "1px solid rgba(245,158,11,0.12)",
          }}
        >
          <div className="flex items-center gap-2">
            <span
              className="text-xs font-bold px-2 py-0.5 rounded-full"
              style={{ background: "rgba(245,158,11,0.15)", color: "#FCD34D" }}
            >
              🟠 RISQUE ÉLEVÉ
            </span>
            <span className="font-semibold" style={{ color: "var(--text)" }}>
              MARTIN & ASSOCIÉS
            </span>
          </div>
          <div className="text-xs" style={{ color: "var(--muted-light)" }}>
            <p>⚠️ DSO : <strong className="text-white">89 jours</strong> (↑ +21j) · Trésorerie négative 2 mois consécutifs</p>
          </div>
        </div>

        <p
          className="text-xs pt-2"
          style={{ color: "var(--muted)", borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          Bonne semaine, <br />
          <strong style={{ color: "var(--muted-light)" }}>Bastien</strong> — Collaborateur IA, Cabinet Moreau & Associés
        </p>
      </div>
    </div>
  );
}

const CHAT_MESSAGES = [
  {
    role: "user",
    content: "Bastien, fais-moi un point sur Dupont SAS. Je les appelle dans 10 minutes.",
  },
  {
    role: "bastien",
    content: `Voici ce que je sais sur Dupont SAS au 04/11/2026 :

**Niveau d'alerte : 🔴 CRITIQUE**

**Signaux détectés :**
• DPO à 127j — en hausse depuis 4 mois consécutifs (norme BTP : 72j)
• Retard URSSAF : 73j de solde débiteur non lettré sur compte 437
• 58% de leurs dettes fournisseurs datent de +60j

**Ce que ça suggère :** Dupont SAS ne paie plus ses fournisseurs ni l'URSSAF à temps depuis plusieurs mois. Trésorerie sous tension sévère probable.

Voulez-vous que je rédige un email pour proposer un RDV de pilotage ?`,
  },
  { role: "user", content: "Oui, génère-le." },
  {
    role: "bastien",
    content: `Email prêt à envoyer :\n\nObjet : Point de situation — quelques indicateurs à partager\n\nBonjour Monsieur Dupont,\n\nEn préparant votre suivi trimestriel, certains indicateurs ont attiré mon attention...\n\n[Email complet disponible dans l'app]`,
    isEmail: true,
  },
];

function ChatDemo() {
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        background: "#0D1117",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* Header */}
      <div
        className="px-5 py-3.5 flex items-center gap-3 text-sm"
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <BastienAvatar size={32} animated={false} showRing={false} />
        <div>
          <div className="font-medium" style={{ color: "var(--text)" }}>Bastien</div>
          <div className="text-xs flex items-center gap-1.5" style={{ color: "#10B981" }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#10B981" }} />
            En ligne
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="p-5 space-y-4 text-sm">
        {CHAT_MESSAGES.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-3 whitespace-pre-wrap leading-relaxed text-xs md:text-sm`}
              style={
                msg.role === "user"
                  ? {
                      background: "rgba(59,130,246,0.15)",
                      border: "1px solid rgba(59,130,246,0.25)",
                      color: "var(--text)",
                      borderBottomRightRadius: "4px",
                    }
                  : msg.isEmail
                  ? {
                      background: "rgba(16,185,129,0.08)",
                      border: "1px solid rgba(16,185,129,0.2)",
                      color: "var(--muted-light)",
                      borderBottomLeftRadius: "4px",
                    }
                  : {
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      color: "var(--muted-light)",
                      borderBottomLeftRadius: "4px",
                    }
              }
            >
              {msg.content
                .split("\n")
                .map((line, li) =>
                  line.startsWith("**") && line.endsWith("**") ? (
                    <strong key={li} style={{ color: "var(--text)", display: "block" }}>
                      {line.replace(/\*\*/g, "")}
                    </strong>
                  ) : (
                    <span key={li} style={{ display: "block" }}>
                      {line.replace(/\*\*/g, "")}
                    </span>
                  )
                )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function EmailDemo() {
  return (
    <div
      className="rounded-2xl overflow-hidden text-sm"
      style={{
        background: "#0D1117",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        className="px-5 py-3.5 text-xs"
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          color: "var(--muted)",
        }}
      >
        Email pré-rédigé par Bastien · À personnaliser si besoin · Cliquez Envoyer
      </div>
      <div className="p-5 md:p-7 space-y-4">
        <div className="text-xs space-y-1.5" style={{ color: "var(--muted)" }}>
          <p><strong style={{ color: "var(--muted-light)" }}>À :</strong> m.dupont@dupont-sas.fr</p>
          <p><strong style={{ color: "var(--muted-light)" }}>Objet :</strong> Point de situation — quelques indicateurs à partager</p>
        </div>
        <div
          className="h-px"
          style={{ background: "rgba(255,255,255,0.06)" }}
        />
        <div className="space-y-3 text-sm leading-relaxed" style={{ color: "var(--muted-light)" }}>
          <p>Bonjour Monsieur Dupont,</p>
          <p>
            En préparant votre suivi trimestriel, quelques indicateurs ont retenu mon attention
            et je préfère vous en parler directement plutôt que d'attendre le prochain bilan.
          </p>
          <p>
            Vos délais de paiement fournisseurs ont évolué de façon significative ces derniers mois,
            et j'aimerais vous proposer un point rapide de 30 minutes pour en parler ensemble.
          </p>
          <p>
            Ce n'est pas un sujet d'inquiétude à ce stade, mais les cabinets qui anticipent
            sont ceux qui gardent le plus de marges de manœuvre.
          </p>
          <p>
            Seriez-vous disponible la semaine prochaine, mardi ou jeudi matin ?
          </p>
          <p>Bien cordialement,</p>
          <p>
            <strong style={{ color: "var(--text)" }}>Sophie Moreau</strong>
            <br />
            <span style={{ color: "var(--muted)", fontSize: "0.75rem" }}>
              Cabinet Moreau & Associés · Expert-comptable
            </span>
          </p>
        </div>
        <div
          className="flex gap-2 pt-2"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <button
            className="text-xs px-4 py-2 rounded-lg font-medium"
            style={{
              background: "linear-gradient(135deg, #3B82F6, #6366f1)",
              color: "white",
            }}
          >
            Envoyer ✓
          </button>
          <button
            className="text-xs px-4 py-2 rounded-lg"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "var(--muted-light)",
            }}
          >
            Modifier
          </button>
        </div>
      </div>
    </div>
  );
}

export default function What() {
  const [activeTab, setActiveTab] = useState("rapport");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="bastien"
      className="section-py"
      ref={ref}
      style={{
        background:
          "linear-gradient(180deg, var(--bg) 0%, #080D1A 50%, var(--bg) 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div
            className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full mb-6"
            style={{
              background: "rgba(16,185,129,0.1)",
              border: "1px solid rgba(16,185,129,0.25)",
              color: "#34D399",
            }}
          >
            Ce que Bastien fait concrètement
          </div>
          <h2
            className="font-bold tracking-tight mb-4"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", color: "var(--text)" }}
          >
            Chaque semaine, sans y penser.
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "var(--muted)" }}>
            Voici ce que Bastien vous livre : le rapport du lundi, le chat contextuel,
            et les emails prêts à envoyer.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div
            className="flex rounded-xl p-1 mb-6 w-fit mx-auto"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                style={
                  activeTab === tab.id
                    ? {
                        background: "rgba(59,130,246,0.15)",
                        color: "#60A5FA",
                        border: "1px solid rgba(59,130,246,0.25)",
                      }
                    : { color: "var(--muted)", border: "1px solid transparent" }
                }
              >
                {tab.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              {activeTab === "rapport" && <ReportDemo />}
              {activeTab === "chat" && <ChatDemo />}
              {activeTab === "email" && <EmailDemo />}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
