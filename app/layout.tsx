import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bastien — Votre collaborateur IA | Veillor",
  description:
    "Bastien surveille la santé financière de vos clients PME pendant que vous dormez. Détection des difficultés 6 à 12 mois en avance. Pour cabinets d'expertise comptable.",
  openGraph: {
    title: "Bastien — Votre collaborateur IA",
    description:
      "Il surveille la santé de vos clients pendant que vous dormez.",
    siteName: "Veillor",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
