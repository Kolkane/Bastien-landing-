import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="border-t py-10 px-6"
      style={{
        borderColor: "rgba(255,255,255,0.06)",
        background: "rgba(0,0,0,0.2)",
      }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs" style={{ color: "var(--muted)" }}>
        <div className="flex items-center gap-2">
          <div
            className="w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold"
            style={{ background: "linear-gradient(135deg, #3B82F6, #6366f1)", color: "white" }}
          >
            V
          </div>
          <span>Veillor SAS — Éditeur de Bastien</span>
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
          <a href="#" className="hover:text-white transition-colors">CGU</a>
          <a href="#" className="hover:text-white transition-colors">RGPD</a>
          <Link href="/connexion" className="hover:text-white transition-colors">Connexion</Link>
        </div>

        <div className="flex items-center gap-1.5">
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "#10B981", animation: "blink 2s step-end infinite" }}
          />
          <span>Hébergé en France 🇫🇷 · Propulsé par Mistral AI</span>
        </div>
      </div>
    </footer>
  );
}
