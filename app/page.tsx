import type { Metadata } from "next";
import WhyChooseUs from "@/components/whyUs/WhyChoosUs";
import Hero from "@/components/hero/Hero";
import Process from "@/components/process/Process";
import Testimonials from "@/components/testimonials/Testimonials";
import CTAContact from "@/components/ctaContact/CTAContact";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/Header";

export const metadata: Metadata = {
  title: "AWA Consulting - Conseil & Accompagnement Haut de Gamme",
  description:
    "AWA Consulting accompagne les créateurs et dirigeants d’entreprise avec un conseil haut de gamme, une stratégie claire et un accompagnement sur-mesure.",
  keywords: [
    "AWA Consulting",
    "consulting",
    "création d’entreprise",
    "accompagnement entrepreneurs",
    "stratégie business",
    "haut de gamme",
  ],
  openGraph: {
    title: "AWA Consulting - Conseil & Stratégie Premium",
    description:
      "Transformez vos idées en succès avec AWA Consulting. Un accompagnement haut de gamme pour les entrepreneurs ambitieux.",
    url: "https://awaconsultinggroup.com",
    siteName: "AWA Consulting",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "https://awaconsultinggroup.com/images/Logo.OG-v2.jpg", // ✅ URL absolue
        width: 1200,
        height: 630,
        alt: "AWA Consulting - Conseil Premium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AWA Consulting",
    description:
      "Conseil premium pour créateurs et dirigeants d’entreprise. Coaching, stratégie et accompagnement sur-mesure.",
    images: ["https://awaconsultinggroup.com/images/Logo.OG-v2.jpg"], // ✅ URL absolue
    site: "@awa_consulting", // à compléter si compte Twitter existant
    creator: "@awa_consulting",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://awaconsultinggroup.com"), // ✅ base URL
};

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <CTAContact />
      <Footer />
    </>
  );
}
