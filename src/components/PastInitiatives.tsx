import Image from "next/image";

const DRIVES = [
  {
    image: "/images/placeholders/drive-food.jpg",
    title: "Food Distribution Drive",
    description:
      "Monthly ration kits distributed to families in need across Old City, Hyderabad, ensuring no one goes hungry.",
  },
  {
    image: "/images/placeholders/drive-clothing.jpg",
    title: "Winter Clothing Drive",
    description:
      "Warm blankets, jackets, and clothing distributed to homeless individuals and low-income families during winter.",
  },
  {
    image: "/images/placeholders/drive-education.jpg",
    title: "Education Support Program",
    description:
      "School supplies, books, and tuition assistance provided to underprivileged children to support their education.",
  },
  {
    image: "/images/placeholders/drive-medical.jpg",
    title: "Medical Aid Camp",
    description:
      "Free health check-ups, medicines, and referral services organized in underserved neighborhoods.",
  },
  {
    image: "/images/placeholders/drive-shelter.jpg",
    title: "Shelter Assistance",
    description:
      "Emergency shelter support and housing repairs for families affected by natural disasters and poverty.",
  },
  {
    image: "/images/placeholders/drive-water.jpg",
    title: "Clean Water Initiative",
    description:
      "Installation of water purification systems and distribution of clean drinking water in water-scarce areas.",
  },
];

export default function PastInitiatives() {
  return (
    <section id="drives" className="bg-white py-20 md:py-28">
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
