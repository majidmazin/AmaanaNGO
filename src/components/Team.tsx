import { INSTAGRAM_URL } from "@/lib/constants";

const TEAM_MEMBERS = [
  { name: "Mohammed Irfan", role: "Founder & President", initials: "MI" },
  { name: "Ayesha Khan", role: "Vice President", initials: "AK" },
  { name: "Syed Omer", role: "Operations Head", initials: "SO" },
  { name: "Nazia Begum", role: "Outreach Coordinator", initials: "NB" },
  { name: "Fahad Ali", role: "Volunteer Manager", initials: "FA" },
  { name: "Zahra Ahmed", role: "Social Media Lead", initials: "ZA" },
];

export default function Team() {
  return (
    <section id="team" className="bg-white py-20 md:py-28">
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

        <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.name} className="text-center">
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
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            Volunteer With Us
          </a>
        </div>
      </div>
    </section>
  );
}
