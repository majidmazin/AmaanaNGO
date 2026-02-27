const TESTIMONIALS = [
  {
    quote:
      "Amaana Foundation brought Eid to our doorstep. My children received new clothes and sweets — it was the first time in years they felt the joy of Eid. JazakAllahu Khairan.",
    name: "Fatima B.",
    role: "Beneficiary, Old City",
  },
  {
    quote:
      "What sets Amaana apart is their transparency. I know exactly where my zakat goes. They send photos, updates, and even let donors visit distribution sites. Truly trustworthy.",
    name: "Ahmed K.",
    role: "Regular Donor",
  },
  {
    quote:
      "Volunteering with Amaana during the winter drive changed my perspective. Seeing families receive warm blankets with tears of gratitude — that's something money can't buy.",
    name: "Sarah M.",
    role: "Volunteer",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-warm-100 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-serif text-sm font-bold uppercase tracking-widest text-brand-gold-400">
            Voices of Impact
          </p>
          <h2 className="mt-3 text-3xl font-bold text-brand-blue-700 sm:text-4xl md:text-5xl">
            What People Say
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded bg-brand-gold-400" />
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="relative rounded-xl bg-white p-8 shadow-md"
            >
              {/* Quote mark */}
              <svg
                className="absolute -top-3 left-6 h-10 w-10 text-brand-gold-400/30"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
              </svg>
              <blockquote className="relative mt-4 text-warm-700 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue-100 font-bold text-brand-blue-600">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-brand-blue-700">
                    {t.name}
                  </p>
                  <p className="text-sm text-warm-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
