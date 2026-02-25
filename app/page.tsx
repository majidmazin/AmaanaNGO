import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { CurrentInitiative } from "@/components/current-initiative"
import { Impact } from "@/components/impact"
import { Drives } from "@/components/drives"
import { Testimonials } from "@/components/testimonials"
import { Team } from "@/components/team"
import { SocialMedia } from "@/components/social-media"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <CurrentInitiative />
        <Impact />
        <Drives />
        <Testimonials />
        <Team />
        <SocialMedia />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
