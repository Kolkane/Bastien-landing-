import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import Why from "@/components/sections/Why";
import How from "@/components/sections/How";
import What from "@/components/sections/What";
import Pricing from "@/components/sections/Pricing";
import Faq from "@/components/sections/Faq";
import FinalCta from "@/components/sections/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Why />
        <How />
        <What />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
