import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold text-white">Amanah</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering lives through compassion, one family at a time.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-emerald-400 transition">About Us</a></li>
              <li><a href="#drives" className="hover:text-emerald-400 transition">Our Work</a></li>
              <li><a href="#impact" className="hover:text-emerald-400 transition">Impact</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">Get Involved</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-emerald-400" />
                <a href="tel:+923001234567" className="hover:text-emerald-400 transition">+92 300 1234567</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-emerald-400" />
                <a href="mailto:hello@amanah.org" className="hover:text-emerald-400 transition">hello@amanah.org</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>Karachi, Pakistan</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-emerald-400 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-emerald-400 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-emerald-400 transition">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 sm:pt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-4">Privacy & Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-emerald-400 transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition">Tax Information</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Newsletter</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded transition font-medium text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="text-center text-gray-400 text-sm border-t border-gray-800 pt-8">
            <p>© {currentYear} Amanah. All rights reserved. Built with compassion.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
