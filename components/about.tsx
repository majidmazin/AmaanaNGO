export function About() {
  const values = [
    {
      title: 'Zakat',
      description: 'Fulfilling the Islamic obligation of giving to those in need.'
    },
    {
      title: 'Sadaqah',
      description: 'Voluntary charity driven by compassion and community love.'
    },
    {
      title: 'Integrity',
      description: 'Operating with transparency and accountability in all our programs.'
    },
    {
      title: 'Community First',
      description: 'Empowering people to help themselves and their neighbors.'
    }
  ]

  return (
    <section id="about" className="w-full bg-white py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6">
            About Amaana Foundation
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Founded in 2016 in Hyderabad, Amaana Foundation is an Islamic charity dedicated to serving vulnerable communities through programs rooted in the principles of Zakat and Sadaqah. We believe that every act of giving, no matter how small, can transform lives and create lasting hope.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {values.map((value) => (
            <div key={value.title} className="bg-secondary p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-primary mb-3">{value.title}</h3>
              <p className="text-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
