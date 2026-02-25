import Link from 'next/link'
import { Instagram, Facebook, Youtube } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-primary text-white py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <h2 className="font-serif text-2xl font-bold">Amaana Foundation</h2>
            <p className="text-sm leading-relaxed text-white/80">
              Building hope and dignity through Islamic values of Zakat and Sadaqah.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold uppercase text-sm tracking-wider mb-3">
              Navigation
            </h4>
            <a href="#hero" className="text-sm text-white/80 hover:text-white transition-colors">Home</a>
            <a href="#about" className="text-sm text-white/80 hover:text-white transition-colors">About</a>
            <a href="#past-initiatives" className="text-sm text-white/80 hover:text-white transition-colors">Initiatives</a>
            <a href="#contact" className="text-sm text-white/80 hover:text-white transition-colors">Contact</a>
          </div>

          {/* Programs */}
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold uppercase text-sm tracking-wider mb-3">
              Programs
            </h4>
            <span className="text-sm text-white/80">Food Aid</span>
            <span className="text-sm text-white/80">Education</span>
            <span className="text-sm text-white/80">Healthcare</span>
            <span className="text-sm text-white/80">Community Support</span>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold uppercase text-sm tracking-wider mb-3">
              Follow Us
            </h4>
            <a 
              href="https://instagram.com/amaanafoundation"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <Instagram size={18} /> Instagram
            </a>
            <a 
              href="https://facebook.com/amaanafoundation"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <Facebook size={18} /> Facebook
            </a>
            <a 
              href="https://youtube.com/amaanafoundation"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <Youtube size={18} /> YouTube
            </a>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-sm text-white/70">
            © {new Date().getFullYear()} Amaana Foundation. All rights reserved. | Registered NGO in Hyderabad, India
          </p>
        </div>
      </div>
    </footer>
  )
}
