"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(6,11,24,0.92)"
          : "rgba(6,11,24,0)",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.06)"
          : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
            style={{
              background: "linear-gradient(135deg, #3B82F6, #6366f1)",
              color: "white",
            }}
          >
            V
          </div>
          <span className="font-semibold tracking-tight" style={{ color: "var(--text)" }}>
            Veillor
          </span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-sm" style={{ color: "var(--muted-light)" }}>
          <a href="#pourquoi" className="hover:text-white transition-colors">Pourquoi</a>
          <a href="#comment" className="hover:text-white transition-colors">Comment</a>
          <a href="#bastien" className="hover:text-white transition-colors">Bastien</a>
          <a href="#tarifs" className="hover:text-white transition-colors">Tarifs</a>
        </div>

        {/* CTA */}
        <Link
          href="/connexion"
          className="text-sm px-4 py-2 rounded-lg font-medium transition-all duration-200"
          style={{
            background: "rgba(59,130,246,0.12)",
            border: "1px solid rgba(59,130,246,0.3)",
            color: "#60A5FA",
          }}
        >
          Se connecter
        </Link>
      </div>
    </nav>
  );
}
