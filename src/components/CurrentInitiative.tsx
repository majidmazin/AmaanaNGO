import { Zap } from 'lucide-react';

function CurrentInitiative() {
  return (
    <section id="current" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-amber-400 to-yellow-400">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="w-6 h-6 text-white" />
            <span className="text-white font-semibold text-sm sm:text-base uppercase tracking-wide">Active Campaign</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Winter Relief Drive 2025
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Families are facing freezing temperatures without adequate shelter and warmth. We're raising funds for emergency winter kits including blankets, heaters, and food supplies. Your donation can save lives this winter.
          </p>

          <div className="mb-8">
            <div className="bg-white/20 rounded-full h-4 overflow-hidden mb-4">
              <div className="bg-white h-full w-72%" style={{width: '72%'}}></div>
            </div>
            <p className="text-white font-semibold text-lg">
              <span className="text-2xl font-bold">₨2,450,000</span> raised of ₨3,500,000 goal
            </p>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105"
          >
            Contribute Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default CurrentInitiative;
