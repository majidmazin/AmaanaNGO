const STATS = [
  { value: "2,200+", label: "Families Helped" },
  { value: "₹75L+", label: "Donated" },
  { value: "20+", label: "Volunteers" },
  { value: "20+", label: "Drives Organized" },
];

export default function ImpactStats() {
  return (
    <section id="impact" className="bg-brand-blue-700 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="font-serif text-sm font-bold uppercase tracking-widest text-brand-gold-300">
            Our Reach
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Your Impact
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded bg-brand-gold-400" />
        </div>

        <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-4xl font-bold text-brand-gold-400 md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium tracking-wide text-brand-blue-200 md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
