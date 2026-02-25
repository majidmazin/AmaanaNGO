import Image from 'next/image'

export function CurrentInitiative() {
  return (
    <section id="current-initiative" className="w-full bg-white py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-primary rounded-xl overflow-hidden">
          <div className="relative h-64 md:h-full min-h-96">
            <Image
              src="/images/drive-food.jpg"
              alt="Eid Kits 2025"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8 md:p-12 text-white">
            <p className="text-sm font-semibold uppercase tracking-widest mb-4 opacity-90">
              Current Appeal
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
              Eid Kits 2025
            </h2>
            <p className="text-lg mb-8 opacity-95 leading-relaxed">
              This Eid, help us bring joy and dignity to 1,000 families in Hyderabad. Each kit contains essential items and treats so every family can celebrate together. Your contribution makes a direct difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://instagram.com/amaanafoundation"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-white text-primary rounded-lg hover:bg-opacity-90 transition-all font-semibold text-center"
              >
                Support This Drive
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
