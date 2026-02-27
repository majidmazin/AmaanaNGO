function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-50 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-teal-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Empowering Lives Through <span className="text-emerald-600">Compassion</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Amanah brings hope and support to families in need. Together, we're building a community where everyone has access to basic necessities and a chance to thrive.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition transform hover:scale-105">
            Make a Donation
          </button>
          <button className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-lg font-semibold text-lg transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
