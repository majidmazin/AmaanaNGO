function DonationCTA() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-emerald-600 to-teal-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Make a Difference?
        </h2>
        <p className="text-xl text-emerald-50 mb-8 leading-relaxed">
          Your generosity can change lives. Whether you can donate once or become a monthly supporter, every contribution matters.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl font-bold text-white mb-2">500 PKR</div>
            <p className="text-emerald-50">Provides meals for a family for a week</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl font-bold text-white mb-2">2000 PKR</div>
            <p className="text-emerald-50">Funds emergency medical care</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl font-bold text-white mb-2">5000 PKR</div>
            <p className="text-emerald-50">Covers school supplies for a child</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl font-bold text-white mb-2">10000 PKR</div>
            <p className="text-emerald-50">Supports a family for a month</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white hover:bg-gray-50 text-emerald-600 px-10 py-4 rounded-lg font-semibold text-lg transition transform hover:scale-105">
            Donate Now
          </button>
          <button className="border-2 border-white text-white hover:bg-white/10 px-10 py-4 rounded-lg font-semibold text-lg transition">
            Become a Monthly Donor
          </button>
        </div>

        <p className="text-emerald-50 mt-8 text-sm">
          All donations are secure and encrypted. Amanah is a registered non-profit organization.
        </p>
      </div>
    </section>
  );
}

export default DonationCTA;
