"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";

export default function Navbar() {
  const pathname = usePathname();
  const [overHero, setOverHero] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const update = () => {
      const onHome = pathname === "/";
      setOverHero(onHome && window.scrollY <= 50);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        overHero
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur shadow-md"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          <a href="/" className="flex shrink-0 items-center gap-2">
            <Image
              src="/images/logo.png"
              alt={SITE_NAME}
              width={96}
              height={157}
              className="h-12 w-auto md:h-14"
            />
            <span
              className={`font-sans text-lg font-bold tracking-wide transition-colors md:text-xl ${
                overHero ? "text-white" : "text-brand-blue-600"
              }`}
            >
              {SITE_NAME}
            </span>
          </a>

          <div className="hidden items-center gap-6 md:flex lg:gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-brand-gold-400 ${
                  overHero ? "text-white/90" : "text-warm-700"
                }`}
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/donate"
              className="rounded-full bg-brand-gold-400 px-5 py-2 text-sm font-semibold text-brand-blue-900 shadow-md transition-all hover:bg-brand-gold-500 hover:shadow-lg"
            >
              Donate
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 transition-all ${
                mobileOpen
                  ? "translate-y-2 rotate-45 bg-warm-800"
                  : overHero
                    ? "bg-white"
                    : "bg-warm-700"
              }`}
            />
            <span
              className={`block h-0.5 w-6 transition-all ${
                mobileOpen
                  ? "opacity-0"
                  : overHero
                    ? "bg-white"
                    : "bg-warm-700"
              }`}
            />
            <span
              className={`block h-0.5 w-6 transition-all ${
                mobileOpen
                  ? "-translate-y-2 -rotate-45 bg-warm-800"
                  : overHero
                    ? "bg-white"
                    : "bg-warm-700"
              }`}
            />
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          mobileOpen ? "max-h-96 bg-white shadow-lg" : "max-h-0"
        }`}
      >
        <div className="space-y-1 px-5 pb-4 pt-2 sm:px-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block rounded-lg px-3 py-2 text-base font-medium text-warm-700 transition-colors hover:bg-brand-blue-50 hover:text-brand-blue-600"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/donate"
            onClick={() => setMobileOpen(false)}
            className="mt-2 block rounded-full bg-brand-gold-400 px-5 py-2.5 text-center text-sm font-semibold text-brand-blue-900 shadow-md transition-all hover:bg-brand-gold-500"
          >
            Donate
          </Link>
        </div>
      </div>
    </nav>
  );
}
