"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import BastienAvatar from "@/components/BastienAvatar";

const TYPING_PHRASES = [
  "surveille vos clients pendant que vous dormez.",
  "détecte les signaux d'alerte 6 mois en avance.",
  "rédige vos emails à votre place.",
  "analyse vos 200 clients chaque semaine.",
  "ne rate jamais une procédure collective.",
];

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const current = TYPING_PHRASES[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 38);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2400);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 18);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setPhraseIndex((i) => (i + 1) % TYPING_PHRASES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, phraseIndex, mounted]);

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ paddingTop: "6rem" }}
    >
      {/* Arrière-plan animé */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          style={{
            position: "absolute",
            top: "-10%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "80vw",
            height: "60vh",
            background:
              "radial-gradient(ellipse at center, rgba(59,130,246,0.08) 0%, rgba(99,102,241,0.04) 50%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            left: "10%",
            width: "30vw",
            height: "30vw",
            background:
              "radial-gradient(ellipse at center, rgba(16,185,129,0.05) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
        {/* Grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse at 50% 30%, black 30%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full mb-8"
          style={{
            background: "rgba(16,185,129,0.1)",
            border: "1px solid rgba(16,185,129,0.25)",
            color: "#10B981",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "#10B981", animation: "blink 1.5s step-end infinite" }}
          />
          Conçu pour les cabinets d'expertise comptable · 100% souverain français
        </div>

        {/* Avatar */}
        <div className="flex justify-center mb-8">
          <BastienAvatar size={96} animated showRing />
        </div>

        {/* Headline */}
        <h1
          className="font-bold tracking-tight leading-tight mb-4"
          style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)", color: "var(--text)" }}
        >
          Rencontrez{" "}
          <span className="gradient-text">Bastien</span>
          <br />
          votre nouveau collaborateur.
        </h1>

        {/* Typer */}
        <p
          className="text-lg md:text-xl mb-3"
          style={{ color: "var(--muted-light)", minHeight: "2em" }}
        >
          Il{" "}
          <span style={{ color: "var(--text)", fontWeight: 500 }}>
            {displayed}
          </span>
          <span className="animate-blink" style={{ color: "var(--accent)" }}>|</span>
        </p>

        <p className="text-base mb-10 max-w-xl mx-auto" style={{ color: "var(--muted)" }}>
          Chaque lundi matin, il vous livre un rapport complet sur la santé financière de vos clients —
          avec les alertes, les emails pré-rédigés et les recommandations d'action.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a
            href="#tarifs"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200"
            style={{
              background: "linear-gradient(135deg, #3B82F6, #6366f1)",
              color: "white",
              boxShadow: "0 0 30px rgba(59,130,246,0.35)",
            }}
          >
            Faire entrer Bastien dans mon cabinet
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#bastien"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm transition-all duration-200"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "var(--muted-light)",
            }}
          >
            Voir ce que Bastien fait
          </a>
        </div>

        {/* Social proof */}
        <p className="mt-8 text-xs" style={{ color: "var(--muted)" }}>
          Propulsé par{" "}
          <span style={{ color: "var(--muted-light)" }}>Mistral AI · Clever Cloud Paris · Scaleway Paris</span>
          {" "}— 100% souverain 🇫🇷
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        style={{ color: "var(--muted)" }}
      >
        <span className="text-xs">Découvrir</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          style={{ animation: "float 2s ease-in-out infinite" }}
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
