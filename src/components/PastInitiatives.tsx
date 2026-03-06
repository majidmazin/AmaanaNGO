import Image from "next/image";

const DRIVES = [
  {
    image: "/images/drives/2026-dates-distribution.png",
    title: "Dates Distribution 2026",
    description:
      "Distributed 162 kg of high-quality premium dates to to the underprivileged in our community.",
  },
  {
    image: "/images/drives/2025-eid-kits.jpeg",
    title: "Eid Kits 2025",
    description:
      "Raised ₹11,10,742.53 bringing joy and ease to 650 families on Eid-ul-Fitr, 2025.",
  },
  {
    image: "/images/drives/2025-winter-drive.png",
    title: "Amaana Winter Drive 2025-2026",
    description:
      "Delivered warmth to 234 of the Ummah including Madarsah students, orphan children and widows among others.",
  },
  {
    image: "/images/drives/2024-eid-kits.JPG",
    title: "Eid Kits 2024",
    description:
      "Donated ₹7,00,500 worth of Eid kits to 467 families on Eid-ul-Fitr, 2024.",
  },
  {
    image: "/images/drives/taleem-initiative.png",
    title: "Amaana Taleem Initiative",
    description:
      "Educational kits gifted to 50 orphan children thanks to one of our generous donors.",
  },
  {
    image: "/images/drives/2023-eid-kits.JPG",
    title: "Eid Kits 2023",
    description:
      "Disbursed 408 kits worth ₹1,500 to families in need on Eid-ul-Fitr, 2023.",
  },
];

export default function PastInitiatives() {
  return (
    <section id="initiatives" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-serif text-sm font-bold uppercase tracking-widest text-brand-gold-400">
            What We&apos;ve Done
          </p>
          <h2 className="mt-3 text-3xl font-bold text-brand-blue-700 sm:text-4xl md:text-5xl">
            Past Initiatives
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded bg-brand-gold-400" />
          <p className="mt-6 text-lg text-warm-600">
            A look at the drives and programs that have touched lives across
            Hyderabad and beyond.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {DRIVES.map((drive) => (
            <div
              key={drive.title}
              className="group overflow-hidden rounded-xl bg-warm-50 shadow-md transition-all hover:shadow-xl"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={drive.image}
                  alt={drive.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-900/30 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-brand-blue-700">
                  {drive.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-warm-600">
                  {drive.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
