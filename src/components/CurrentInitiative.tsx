import { INSTAGRAM_URL } from "@/lib/constants";

export default function CurrentInitiative() {
  return (
    <section id="initiative" className="bg-warm-100 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-brand-blue-600 via-brand-blue-700 to-brand-blue-800 shadow-2xl">
          <div className="grid items-center md:grid-cols-2">
            {/* Text content */}
            <div className="p-8 md:p-12 lg:p-16">
              <span className="inline-block rounded-full bg-brand-gold-400/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-gold-300">
                Current Appeal
              </span>
              <h2 className="mt-5 text-3xl font-bold leading-tight text-white md:text-4xl">
                Eid Kit Drive 2026
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-brand-blue-100">
                This Eid, help us bring joy to families in need across
                Hyderabad. Each Eid kit includes new clothes, food essentials,
                sweets, and gifts for children. Together, we can make sure no
                family is left behind during the celebrations.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-gold-400 px-7 py-3 font-semibold text-white shadow-lg transition-all hover:bg-brand-gold-500 hover:shadow-xl"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Contribute Now
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-7 py-3 font-semibold text-white transition-all hover:border-white hover:bg-white/10"
                >
                  Volunteer
                </a>
              </div>
            </div>

            {/* Decorative side */}
            <div className="relative hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-brand-blue-700/50" />
              <div className="flex h-full items-center justify-center p-12">
                <div className="text-center">
                  <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full border-4 border-brand-gold-400/30 bg-brand-gold-400/10">
                    <svg className="h-16 w-16 text-brand-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                    </svg>
                  </div>
                  <p className="mt-6 font-serif text-2xl font-bold text-brand-gold-300">
                    Goal: 500 Families
                  </p>
                  <p className="mt-2 text-brand-blue-200">
                    Help us reach our target this Eid
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
