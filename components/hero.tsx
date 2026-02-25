import Image from 'next/image'

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen w-full pt-24 flex items-center overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="Community volunteers together"
        fill
        className="absolute inset-0 object-cover -z-10"
        priority
      />
      <div className="absolute inset-0 bg-black/40 -z-10"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 w-full">
        <div className="flex flex-col gap-6 max-w-2xl">
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-white leading-tight">
            Amaana Foundation
          </h1>
          <p className="text-xl sm:text-2xl text-white/95 leading-relaxed">
            Building hope and dignity through Islamic values of Zakat and Sadaqah. Together, we transform lives in Hyderabad and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="https://instagram.com/amaanafoundation"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-all font-semibold text-lg text-center"
            >
              Support Us on Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
