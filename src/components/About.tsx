export default function About() {
  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-serif text-brand-gold-400 text-sm font-bold uppercase tracking-widest">
            Who We Are
          </p>
          <h2 className="mt-3 text-3xl font-bold text-brand-blue-700 sm:text-4xl md:text-5xl">
            About Amaana Foundation
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded bg-brand-gold-400" />
        </div>

        {/* Mission & Story */}
        <div className="mt-14 grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-bold text-brand-blue-600">
              Our Mission
            </h3>
            <p className="mt-4 leading-relaxed text-warm-700">
              Amaana Foundation was established in Hyderabad, India, with a
              simple yet powerful mission — to be a trustworthy bridge between
              those who wish to give and those in need. Rooted in the Islamic
              principles of <em>amanah</em> (trust), we ensure every
              contribution reaches the people who need it most.
            </p>
            <p className="mt-4 leading-relaxed text-warm-700">
              Founded by a group of compassionate young professionals, Amaana
              began as a small Ramadan food-kit drive and has since grown into
              a year-round effort spanning education, healthcare, shelter, and
              emergency relief across Hyderabad and surrounding communities.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-brand-blue-600">
              Our Values
            </h3>
            <p className="mt-4 leading-relaxed text-warm-700">
              Every initiative we undertake is guided by the Quranic
              imperative to serve humanity. We believe in transparency,
              accountability, and delivering aid with dignity and respect.
            </p>
            <div className="mt-6 space-y-4">
              {VALUES.map((v) => (
                <div
                  key={v.title}
                  className="flex items-start gap-4 rounded-xl bg-brand-blue-50/60 p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-gold-400 text-white">
                    {v.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-blue-700">
                      {v.title}
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-warm-600">
                      {v.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const VALUES = [
  {
    title: "Zakat",
    description:
      "We facilitate the proper distribution of obligatory almsgiving, ensuring it reaches eligible recipients with full transparency.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Sadaqah",
    description:
      "Voluntary charity that goes beyond obligation — fueling our food drives, education programs, and emergency relief efforts.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Amanah (Trust)",
    description:
      "Our namesake value — every donation is a sacred trust. We maintain full accountability from collection to delivery.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];
