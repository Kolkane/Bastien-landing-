"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import BastienAvatar from "@/components/BastienAvatar";

export default function FinalCta() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      className="section-py relative overflow-hidden"
      ref={ref}
    >
      {/* Glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "60vw",
            height: "60vh",
            background:
              "radial-gradient(ellipse, rgba(99,102,241,0.1) 0%, rgba(59,130,246,0.05) 40%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-3xl mx-auto px-6 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <BastienAvatar size={80} animated showRing />
          </div>

          <h2
            className="font-bold tracking-tight mb-5"
            style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "var(--text)" }}
          >
            Faites entrer Bastien
            <br />
            <span className="gradient-text">dans votre cabinet.</span>
          </h2>

          <p
            className="text-base mb-8 max-w-lg mx-auto leading-relaxed"
            style={{ color: "var(--muted-light)" }}
          >
            Rejoignez les premiers cabinets qui ne découvrent plus les difficultés de leurs clients trop tard.
            Bastien est opérationnel le jour même.
          </p>

          {/* Simple contact form */}
          <div
            className="glass rounded-2xl p-6 md:p-8 max-w-md mx-auto text-left"
          >
            <p className="text-sm font-medium mb-4" style={{ color: "var(--text)" }}>
              Demander une démo (48h de réponse garantie)
            </p>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Nom du cabinet"
                className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  color: "var(--text)",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "rgba(59,130,246,0.4)";
                  e.target.style.boxShadow = "0 0 0 3px rgba(59,130,246,0.08)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(255,255,255,0.09)";
                  e.target.style.boxShadow = "none";
                }}
              />
              <input
                type="email"
                placeholder="Votre email professionnel"
                className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  color: "var(--text)",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "rgba(59,130,246,0.4)";
                  e.target.style.boxShadow = "0 0 0 3px rgba(59,130,246,0.08)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(255,255,255,0.09)";
                  e.target.style.boxShadow = "none";
                }}
              />
              <input
                type="text"
                placeholder="Nombre de clients à surveiller (environ)"
                className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  color: "var(--text)",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "rgba(59,130,246,0.4)";
                  e.target.style.boxShadow = "0 0 0 3px rgba(59,130,246,0.08)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(255,255,255,0.09)";
                  e.target.style.boxShadow = "none";
                }}
              />
              <button
                className="w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-200"
                style={{
                  background: "linear-gradient(135deg, #3B82F6, #6366f1)",
                  color: "white",
                  boxShadow: "0 0 24px rgba(59,130,246,0.35)",
                }}
              >
                Faire connaissance avec Bastien →
              </button>
            </div>
            <p className="text-xs mt-3 text-center" style={{ color: "var(--muted)" }}>
              Pas d'engagement · Réponse sous 48h · Démo personnalisée sur vos données
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
