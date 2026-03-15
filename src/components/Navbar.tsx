"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { NAV_LINKS, INSTAGRAM_URL, SITE_NAME } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <a href="#" className="flex shrink-0 items-center gap-2">
            <Image
              src="/images/logo.png"
              alt={SITE_NAME}
              width={96}
              height={157}
              className="h-12 w-auto md:h-14"
            />
            <span
              className={`font-sans text-lg font-bold tracking-wide transition-colors md:text-xl ${
                scrolled ? "text-brand-blue-600" : "text-white"
              }`}
            >
              {SITE_NAME}
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-6 md:flex lg:gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-brand-gold-400 ${
                  scrolled ? "text-warm-700" : "text-white/90"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-brand-gold-400 px-5 py-2 text-sm font-semibold text-white shadow-md transition-all hover:bg-brand-gold-500 hover:shadow-lg"
            >
              Donate
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 transition-all ${
                mobileOpen
                  ? "translate-y-2 rotate-45 bg-warm-800"
                  : scrolled
                    ? "bg-warm-700"
                    : "bg-white"
              }`}
            />
            <span
              className={`block h-0.5 w-6 transition-all ${
                mobileOpen
                  ? "opacity-0"
                  : scrolled
                    ? "bg-warm-700"
                    : "bg-white"
              }`}
            />
            <span
              className={`block h-0.5 w-6 transition-all ${
                mobileOpen
                  ? "-translate-y-2 -rotate-45 bg-warm-800"
                  : scrolled
                    ? "bg-warm-700"
                    : "bg-white"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          mobileOpen ? "max-h-96 bg-white shadow-lg" : "max-h-0"
        }`}
      >
        <div className="space-y-1 px-4 pb-4 pt-2">
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
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block rounded-full bg-brand-gold-400 px-5 py-2.5 text-center text-sm font-semibold text-white shadow-md transition-all hover:bg-brand-gold-500"
          >
            Donate
          </a>
        </div>
      </div>
    </nav>
  );
}
