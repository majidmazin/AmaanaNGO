export function Impact() {
  const stats = [
    { number: '15,000+', label: 'Families Helped' },
    { number: '50,000+', label: 'Relief Kits Distributed' },
    { number: '8', label: 'Years of Service' },
    { number: '50+', label: 'Charity Drives' }
  ]

  return (
    <section id="impact" className="w-full bg-primary py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">
            Our Impact
          </h2>
          <p className="text-xl text-white/90">
            Together, we're making real change in Hyderabad and beyond
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-white mb-3">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base text-white/90">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
