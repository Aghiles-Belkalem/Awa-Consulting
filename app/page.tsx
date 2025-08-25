import WhyChooseUs from "@/components/whyUs/WhyChoosUs";
import Hero from "@/components/hero/Hero";
import Process from "@/components/process/Process";
import Testimonials from "@/components/testimonials/Testimonials";
import CTAContact from "@/components/ctaContact/CTAContact";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/Header";

export default function Home() {
  return (
    <>
      <Header id="/" />
      <Hero id="hero" />
      <WhyChooseUs id="about" />
      <Process id="process" />
      <Testimonials id="portfolio" />
      <CTAContact id="contact" />
      <Footer />
    </>
  );
}
