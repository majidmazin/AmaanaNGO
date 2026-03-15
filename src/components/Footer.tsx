import Image from "next/image";
import { FaInstagram, FaYoutube, FaFacebookF, FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";
import {
  SITE_NAME,
  INSTAGRAM_URL,
  YOUTUBE_URL,
  FACEBOOK_URL,
  WHATSAPP_URL,
  PHONE_NUMBER,
  EMAIL_URL,
  NAV_LINKS,
} from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-brand-blue-900 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt={SITE_NAME}
                width={96}
                height={157}
                className="h-12 w-auto"
              />
              <span className="font-serif text-xl font-bold text-white">
                {SITE_NAME}
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-blue-300">
              An Islamic charity based in Hyderabad, India, dedicated to
              serving underprivileged communities through faith-driven
              compassion.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-brand-blue-300 transition-colors hover:text-brand-gold-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & contact links */}
          <div>
            <h4 className="font-semibold text-white">Connect With Us</h4>
            <div className="mt-4 flex flex-wrap gap-3">
              {[
                { href: INSTAGRAM_URL, label: "Instagram", icon: <FaInstagram className="h-5 w-5" /> },
                { href: YOUTUBE_URL, label: "YouTube", icon: <FaYoutube className="h-5 w-5" /> },
                { href: FACEBOOK_URL, label: "Facebook", icon: <FaFacebookF className="h-5 w-5" /> },
                { href: WHATSAPP_URL, label: "WhatsApp", icon: <FaWhatsapp className="h-5 w-5" /> },
                { href: PHONE_NUMBER, label: "Phone", icon: <FaPhone className="h-5 w-5" /> },
                { href: EMAIL_URL, label: "Email", icon: <FaEnvelope className="h-5 w-5" /> },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto:") || s.href.startsWith("tel:") ? undefined : "_blank"}
                  rel={s.href.startsWith("mailto:") || s.href.startsWith("tel:") ? undefined : "noopener noreferrer"}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue-800 text-brand-blue-300 transition-colors hover:bg-brand-blue-700 hover:text-brand-gold-400"
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <p className="mt-6 text-sm text-brand-blue-400">
              Hyderabad, Telangana, India
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-brand-blue-800 pt-6 text-center">
          <p className="text-sm text-brand-blue-400">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights
            reserved. Built with trust, for those in need.
          </p>
        </div>
      </div>
    </footer>
  );
}
