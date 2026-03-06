import { INSTAGRAM_URL, YOUTUBE_URL, FACEBOOK_URL } from "@/lib/constants";
import { FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa";

const iconClass = "h-8 w-8";

const SOCIALS = [
  {
    name: "Instagram",
    href: INSTAGRAM_URL,
    subtitle: "Follow us",
    color: "from-pink-500 to-purple-600",
    icon: <FaInstagram className={iconClass} />,
  },
  {
    name: "YouTube",
    href: YOUTUBE_URL,
    subtitle: "Subscribe to us",
    color: "from-red-500 to-red-700",
    icon: <FaYoutube className={iconClass} />,
  },
  {
    name: "Facebook",
    href: FACEBOOK_URL,
    subtitle: "Connect with us",
    color: "from-blue-600 to-blue-800",
    icon: <FaFacebookF className={iconClass} />,
  },
];

export default function SocialMedia() {
  return (
    <section id="social-media" className="bg-brand-blue-800 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="font-serif text-sm font-bold uppercase tracking-widest text-brand-gold-300">
            Stay Connected
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Follow Our Journey
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded bg-brand-gold-400" />
          <p className="mx-auto mt-6 max-w-xl text-brand-blue-200">
            Follow us on social media to see our latest drives, stories of
            impact, and ways you can contribute.
          </p>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
          {SOCIALS.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full items-center gap-4 rounded-xl bg-white/10 px-8 py-6 backdrop-blur transition-all hover:bg-white/20 hover:shadow-lg sm:w-auto"
            >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${social.color} text-white shadow-md`}
              >
                {social.icon}
              </div>
              <div>
                <p className="text-lg font-bold text-white">{social.name}</p>
                <p className="text-sm text-brand-blue-200">{social.subtitle}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
