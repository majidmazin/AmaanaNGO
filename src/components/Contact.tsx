"use client";

import { FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa";
import { INSTAGRAM_URL, FACEBOOK_URL, YOUTUBE_URL } from "@/lib/constants";

export default function Contact() {
  return (
    <section id="contact" className="bg-warm-100 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-serif text-sm font-bold uppercase tracking-widest text-brand-gold-400">
            Reach Out
          </p>
          <h2 className="mt-3 text-3xl font-bold text-brand-blue-700 sm:text-4xl md:text-5xl">
            Get in Touch
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded bg-brand-gold-400" />
        </div>

        <div className="mt-14 grid gap-12 md:grid-cols-2">
          {/* Contact form */}
          <div className="rounded-xl bg-white p-8 shadow-md">
            <h3 className="text-xl font-bold text-brand-blue-700">
              Send Us a Message
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.open(INSTAGRAM_URL, "_blank");
              }}
              className="mt-6 space-y-5"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-warm-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1.5 w-full rounded-lg border border-warm-300 px-4 py-2.5 text-warm-800 transition-colors focus:border-brand-blue-400 focus:ring-2 focus:ring-brand-blue-400/20 focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-warm-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1.5 w-full rounded-lg border border-warm-300 px-4 py-2.5 text-warm-800 transition-colors focus:border-brand-blue-400 focus:ring-2 focus:ring-brand-blue-400/20 focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-warm-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="mt-1.5 w-full resize-none rounded-lg border border-warm-300 px-4 py-2.5 text-warm-800 transition-colors focus:border-brand-blue-400 focus:ring-2 focus:ring-brand-blue-400/20 focus:outline-none"
                  placeholder="How can we help you?"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-brand-blue-600 px-6 py-3 font-semibold text-white shadow-md transition-all hover:bg-brand-blue-700 hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-brand-blue-700">
                Our Location
              </h3>
              <p className="mt-3 leading-relaxed text-warm-600">
                Amaana Foundation
                <br />
                Hyderabad, Telangana
                <br />
                India
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-brand-blue-700">
                Contact Info
              </h3>
              <div className="mt-3 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue-100 text-brand-blue-600">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-warm-700">
                    contact@amaanafoundation.org
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue-100 text-brand-blue-600">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-warm-700">+91 XXXXX XXXXX</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-brand-blue-700">
                Follow Us
              </h3>
              <div className="mt-3 flex gap-3">
                {[
                  { href: INSTAGRAM_URL, label: "Instagram", icon: <FaInstagram className="h-5 w-5" /> },
                  { href: YOUTUBE_URL, label: "YouTube", icon: <FaYoutube className="h-5 w-5" /> },
                  { href: FACEBOOK_URL, label: "Facebook", icon: <FaFacebookF className="h-5 w-5" /> },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue-600 text-white transition-colors hover:bg-brand-blue-700"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="overflow-hidden rounded-xl border border-warm-200 bg-warm-200">
              <div className="flex h-48 items-center justify-center">
                <div className="text-center">
                  <svg className="mx-auto h-10 w-10 text-warm-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <p className="mt-2 text-sm font-medium text-warm-500">
                    Hyderabad, Telangana, India
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
