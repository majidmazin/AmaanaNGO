import Image from "next/image";
import DonateButton from "./DonateButton";
import { SITE_TAGLINE } from "@/lib/constants";

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center">
      <Image
        src="/images/hero.JPG"
        alt="Amaana Foundation community outreach"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-blue-900/70 via-brand-blue-800/60 to-brand-blue-900/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-32 text-center sm:px-6 lg:px-8">
        {/* <p className="mb-4 font-serif text-lg tracking-wide text-brand-gold-300 md:text-xl">
          Bismillah ir-Rahman ir-Rahim
        </p> */}
        <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          {SITE_TAGLINE}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl">
          Amaana Foundation is an Islamic charity based in Hyderabad, India,
          uplifting underprivileged communities through sadaqah and heartfelt service.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <DonateButton className="inline-flex items-center gap-2 rounded-full bg-brand-gold-400 px-8 py-3.5 text-lg font-semibold text-white shadow-lg transition-all hover:bg-brand-gold-500 hover:shadow-xl cursor-pointer">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            Donate Now
          </DonateButton>
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
