import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import CurrentInitiative from './components/CurrentInitiative';
import CharityDrives from './components/CharityDrives';
import Impact from './components/Impact';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import SocialMedia from './components/SocialMedia';
import Contact from './components/Contact';
import DonationCTA from './components/DonationCTA';
import Footer from './components/Footer';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navigation mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <Hero />
      <About />
      <CurrentInitiative />
      <CharityDrives />
      <Impact />
      <Testimonials />
      <Team />
      <SocialMedia />
      <Contact />
      <DonationCTA />
      <Footer />
    </div>
  );
}

export default App;
