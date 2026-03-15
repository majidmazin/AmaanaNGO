export default function About() {
  return (
    <section id="about" className="bg-warm-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
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
              Our Story
            </h3>
            <p className="mt-4 leading-relaxed text-warm-700">
              In 2020, amid the COVID-19 pandemic, we were moved by the suffering
              of those affected physically, emotionally, and financially, especially
              within our community. During Ramadan, we felt a call to action: help
              our less fortunate brethren celebrate Eid with joy and dignity. With
              the support of family and friends, we started a grassroots effort that
              brought relief to 85 families in our first year.
            </p>
            <p className="mt-4 leading-relaxed text-warm-700">
              In 2023 we formalized our commitment by registering as a
              non-governmental organization. We sought greater transparency,
              accountability, and sustainability in everything we do. Alhamdulillah,
              our application was approved, and we now serve under the name Amaana
              Foundation.
            </p>
            <p className="mt-4 leading-relaxed text-warm-700">
              Since then, our reach has continued to grow. Through dedication and
              the generosity of our network, we were humbled to assist 467
              families last year alone, living out the solidarity and compassion
              at the heart of our faith. We remain dedicated to serving humanity
              with compassion, empathy, and justice, and to making a lasting
              difference in the lives of those in need.
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
    title: "Ikhlas (Sincerity)",
    description:
      "We act with pure intention in every initiative, ensuring our work is done for the right reasons with transparency and integrity.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    title: "Rahma (Compassion)",
    description:
      "Compassion drives everything we do. From food drives to education programs to urgent appeals, we serve with empathy and care.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Amaana (Trust)",
    description:
      "Every donation is a sacred trust. We maintain full accountability from collection to delivery.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];
