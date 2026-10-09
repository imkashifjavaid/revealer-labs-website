import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Faq } from "@/components/Faq";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { IndustryShowcases } from "@/components/IndustryShowcases";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Services />
        <Portfolio />
        <IndustryShowcases />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
