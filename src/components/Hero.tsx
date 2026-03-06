import Image from "next/image";
import { INSTAGRAM_URL, SITE_TAGLINE } from "@/lib/constants";

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center">
      <Image
        src="/images/placeholders/hero.jpg"
        alt="Amaana Foundation community outreach"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-blue-900/70 via-brand-blue-800/60 to-brand-blue-900/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 text-center sm:px-6 lg:px-8">
        {/* <p className="mb-4 font-serif text-lg tracking-wide text-brand-gold-300 md:text-xl">
          Bismillah ir-Rahman ir-Rahim
        </p> */}
        <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          {SITE_TAGLINE}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl">
          Amaana Foundation is an Islamic charity based in Hyderabad, India,
          uplifting underprivileged communities through zakat, sadaqah, and
          heartfelt service.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand-gold-400 px-8 py-3.5 text-lg font-semibold text-white shadow-lg transition-all hover:bg-brand-gold-500 hover:shadow-xl"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            Donate Now
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-8 py-3.5 text-lg font-semibold text-white transition-all hover:border-white hover:bg-white/10"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <svg className="h-6 w-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
