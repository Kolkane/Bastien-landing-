"use client";

import { useState } from "react";
import Link from "next/link";
import BastienAvatar from "@/components/BastienAvatar";

export default function ConnexionPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      {/* Arrière-plan */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          style={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "60vw",
            height: "50vh",
            background:
              "radial-gradient(ellipse, rgba(59,130,246,0.06) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse at 50% 40%, black 20%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative w-full max-w-sm">
        {/* Logo Veillor */}
        <Link
          href="/"
          className="flex items-center justify-center gap-2.5 mb-10"
        >
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold"
            style={{
              background: "linear-gradient(135deg, #3B82F6, #6366f1)",
              color: "white",
            }}
          >
            V
          </div>
          <span
            className="font-semibold text-lg tracking-tight"
            style={{ color: "var(--text)" }}
          >
            Veillor
          </span>
        </Link>

        {/* Card */}
        <div
          className="glass rounded-2xl p-8"
          style={{
            boxShadow: "0 0 60px rgba(0,0,0,0.4)",
          }}
        >
          {/* Avatar */}
          <div className="flex flex-col items-center mb-6">
            <BastienAvatar size={64} animated showRing />
            <div className="mt-3 text-center">
              <h1
                className="text-lg font-bold"
                style={{ color: "var(--text)" }}
              >
                Bonjour, c'est Bastien.
              </h1>
              <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>
                Connectez-vous pour accéder à votre espace cabinet.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div>
              <label
                className="block text-xs font-medium mb-1.5"
                style={{ color: "var(--muted-light)" }}
              >
                Email professionnel
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="cabinet@exemple.fr"
                required
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
            </div>
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label
                  className="text-xs font-medium"
                  style={{ color: "var(--muted-light)" }}
                >
                  Mot de passe
                </label>
                <a
                  href="#"
                  className="text-xs hover:underline"
                  style={{ color: "#60A5FA" }}
                >
                  Mot de passe oublié ?
                </a>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
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
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 mt-1 flex items-center justify-center gap-2"
              style={{
                background: "linear-gradient(135deg, #3B82F6, #6366f1)",
                color: "white",
                boxShadow: "0 0 24px rgba(59,130,246,0.3)",
                opacity: loading ? 0.75 : 1,
              }}
            >
              {loading ? (
                <>
                  <span
                    className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white"
                    style={{ animation: "spin 0.7s linear infinite" }}
                  />
                  Connexion en cours…
                </>
              ) : (
                "Se connecter à Bastien →"
              )}
            </button>
          </form>

          <div
            className="flex items-center gap-3 my-5"
            style={{ color: "var(--muted)" }}
          >
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
            <span className="text-xs">ou</span>
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
          </div>

          <p className="text-xs text-center" style={{ color: "var(--muted)" }}>
            Pas encore de compte ?{" "}
            <Link
              href="/#contact"
              className="font-medium hover:underline"
              style={{ color: "#60A5FA" }}
            >
              Faire connaissance avec Bastien
            </Link>
          </p>
        </div>

        {/* Security note */}
        <div className="flex items-center justify-center gap-1.5 mt-5">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            style={{ color: "var(--muted)" }}
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          <span className="text-xs" style={{ color: "var(--muted)" }}>
            Données hébergées en France 🇫🇷 · Chiffrement TLS 1.3
          </span>
        </div>
      </div>

      {/* Spin keyframe inline */}
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
