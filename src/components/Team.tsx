import { FaInstagram } from "react-icons/fa";
import { INSTAGRAM_URL } from "@/lib/constants";

const TEAM_MEMBERS = [
  { name: "Mohammed Mazhar Khan", role: "Founder/Managing Director", initials: "MMK" },
  { name: "Mohammed Ather Khan", role: "Trustee & Treasurer", initials: "MAK" },
  { name: "Syed Uqba Ali", role: "Trustee", initials: "SUA" },
  { name: "Asma Sultana", role: "Social Media Manager, Communications Officer", initials: "AS" },
  { name: "Mohammed Ismail Khan", role: "Web Developer/IT Specialist", initials: "MIK" },
  { name: "SM Abdul Haseeb", role: "Web Developer/IT Specialist", initials: "AH" },
  { name: "Mohammed Ismail Khan", role: "Chartered Accountant", initials: "MIK" },
  { name: "Jaffar Mohammed Khan", role: "Chartered Accountant", initials: "JMK" },
];

export default function Team() {
  return (
    <section id="team" className="bg-warm-100 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-serif text-sm font-bold uppercase tracking-widest text-brand-gold-400">
            The People Behind The Mission
          </p>
          <h2 className="mt-3 text-3xl font-bold text-brand-blue-700 sm:text-4xl md:text-5xl">
            Our Team & Volunteers
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded bg-brand-gold-400" />
          <p className="mt-6 text-lg text-warm-600">
            A dedicated group of individuals united by faith and the drive to
            serve.
          </p>
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {TEAM_MEMBERS.map((member, index) => (
            <div key={index} className="w-40 flex-shrink-0 text-center">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue-500 to-brand-blue-700 text-2xl font-bold text-white shadow-lg">
                {member.initials}
              </div>
              <h3 className="mt-4 text-sm font-bold text-brand-blue-700">
                {member.name}
              </h3>
              <p className="mt-1 text-xs text-warm-500">{member.role}</p>
            </div>
          ))}
        </div>

        {/* Volunteer CTA */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-brand-gold-400 to-brand-gold-500 p-8 text-center shadow-lg md:p-12">
          <h3 className="text-2xl font-bold text-white md:text-3xl">
            Join Our Team of Volunteers
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-white/90">
            Whether you can spare a few hours or a few days, your time and
            skills can make a real difference. Reach out to us on Instagram to
            get started.
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 font-semibold text-brand-gold-600 shadow-md transition-all hover:bg-warm-50 hover:shadow-lg"
          >
            <FaInstagram className="h-5 w-5" />
            Volunteer With Us
          </a>
        </div>
      </div>
    </section>
  );
}
