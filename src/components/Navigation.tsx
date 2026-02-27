import { Menu, X } from 'lucide-react';

interface NavigationProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

function Navigation({ mobileMenuOpen, setMobileMenuOpen }: NavigationProps) {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Amanah</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-700 hover:text-emerald-600 transition">
              About
            </a>
            <a href="#drives" className="text-gray-700 hover:text-emerald-600 transition">
              Our Work
            </a>
            <a href="#impact" className="text-gray-700 hover:text-emerald-600 transition">
              Impact
            </a>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg transition font-medium">
              Donate
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t">
            <a href="#about" className="block py-2 text-gray-700 hover:text-emerald-600">
              About
            </a>
            <a href="#drives" className="block py-2 text-gray-700 hover:text-emerald-600">
              Our Work
            </a>
            <a href="#impact" className="block py-2 text-gray-700 hover:text-emerald-600">
              Impact
            </a>
            <button className="w-full mt-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg transition font-medium">
              Donate
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
