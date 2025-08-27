import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Metadata corrigé pour OG & Twitter (URL absolues obligatoires)
export const metadata: Metadata = {
  title:
    "AWA Consulting – Accompagnement haut de gamme pour créateurs d'entreprise",
  description:
    "AWA Consulting accompagne les entrepreneurs et créateurs d'entreprise dans leurs projets avec expertise, conseils personnalisés et solutions sur mesure.",
  keywords: [
    "AWA Consulting",
    "création d'entreprise",
    "entrepreneur",
    "accompagnement",
    "haut de gamme",
    "consulting",
    "formation",
    "business plan",
  ],
  authors: [{ name: "Pauline Marent", url: "https://awaconsultinggroup.com" }],
  creator: "Pauline Marent",
  publisher: "AWA Consulting",
  applicationName: "AWA Consulting",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title:
      "AWA Consulting – Accompagnement haut de gamme pour créateurs d'entreprise",
    description:
      "AWA Consulting accompagne les entrepreneurs et créateurs d'entreprise dans leurs projets avec expertise, conseils personnalisés et solutions sur mesure.",
    url: "https://awaconsultinggroup.com",
    siteName: "AWA Consulting",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        // ❌ avant : "/images/1000005918.jpg"
        // ✅ après : URL absolue
        url: "https://awaconsultinggroup.com/images/1000005918.jpg",
        width: 1200,
        height: 630,
        alt: "AWA Consulting - Accompagnement haut de gamme",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AWA Consulting – Accompagnement haut de gamme pour créateurs d'entreprise",
    description:
      "AWA Consulting accompagne les entrepreneurs et créateurs d'entreprise dans leurs projets avec expertise, conseils personnalisés et solutions sur mesure.",
    // ❌ avant : ["/images/og-home.jpg"]
    // ✅ après : URL absolue
    images: ["https://awaconsultinggroup.com/images/1000005918.jpg"],
    site: "@awa_consulting", // à garder si tu crées un compte X/Twitter
    creator: "@awa_consulting",
  },
  metadataBase: new URL("https://awaconsultinggroup.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, color-scheme=light dark"
        />
        {/* ✅ favicon et icônes restent en chemin relatif car elles sont servies en local depuis /public */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
