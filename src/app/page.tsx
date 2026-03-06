import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CurrentInitiative from "@/components/CurrentInitiative";
import ImpactStats from "@/components/ImpactStats";
import PastInitiatives from "@/components/PastInitiatives";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import SocialMedia from "@/components/SocialMedia";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PastInitiatives />
        <About />
        {/* <CurrentInitiative /> */}
        <ImpactStats />
        <Testimonials />
        <Team />
        <SocialMedia />
        {/* <Contact /> */}
      </main>
      <Footer />
    </>
  );
}
