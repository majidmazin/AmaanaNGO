"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import type { DonateMode } from "@/lib/constants";
import { useDonate } from "./DonateProvider";

const DONATE_MODES: { value: DonateMode; label: string }[] = [
  { value: "page", label: "Page" },
  { value: "modal", label: "Modal" },
  { value: "section", label: "Section" },
  { value: "drawer", label: "Drawer" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { mode, setMode, openDonate } = useDonate();

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

            {/* Debug mode switcher */}
            <div className="flex items-center gap-1.5">
              <svg
                className={`h-3.5 w-3.5 ${scrolled ? "text-warm-400" : "text-white/50"}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <select
                value={mode}
                onChange={(e) => setMode(e.target.value as DonateMode)}
                className={`cursor-pointer rounded-md border-0 bg-transparent py-0.5 pr-6 pl-1 text-xs font-medium transition-colors focus:ring-1 focus:ring-brand-gold-400 ${
                  scrolled ? "text-warm-500" : "text-white/70"
                }`}
              >
                {DONATE_MODES.map((m) => (
                  <option key={m.value} value={m.value} className="text-warm-700">
                    {m.label}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={openDonate}
              className="rounded-full bg-brand-gold-400 px-5 py-2 text-sm font-semibold text-white shadow-md transition-all hover:bg-brand-gold-500 hover:shadow-lg cursor-pointer"
            >
              Donate
            </button>
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
          mobileOpen ? "max-h-[28rem] bg-white shadow-lg" : "max-h-0"
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
          <button
            onClick={() => { setMobileOpen(false); openDonate(); }}
            className="mt-2 block w-full rounded-full bg-brand-gold-400 px-5 py-2.5 text-center text-sm font-semibold text-white shadow-md transition-all hover:bg-brand-gold-500 cursor-pointer"
          >
            Donate
          </button>

          {/* Mobile debug switcher */}
          <div className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-warm-100 px-3 py-2">
            <svg
              className="h-3.5 w-3.5 text-warm-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-xs font-medium text-warm-500">Mode:</span>
            <select
              value={mode}
              onChange={(e) => setMode(e.target.value as DonateMode)}
              className="cursor-pointer rounded-md border-0 bg-transparent py-0.5 pr-6 pl-1 text-xs font-semibold text-warm-600 focus:ring-1 focus:ring-brand-gold-400"
            >
              {DONATE_MODES.map((m) => (
                <option key={m.value} value={m.value}>
                  {m.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
}
