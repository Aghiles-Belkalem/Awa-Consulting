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
  authors: [{ name: "Pauline Marent", url: "https://awa-consulting.fr" }],
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
    url: "https://awa-consulting.fr",
    siteName: "AWA Consulting",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/images/og-home.jpg", // à remplacer par une image stylée
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
    images: ["/images/og-home.jpg"],
    site: "@awa_consulting", // si tu as un compte Twitter
    creator: "@awa_consulting",
  },
  metadataBase: new URL("https://awa-consulting.fr"),
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
