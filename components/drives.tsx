import Image from 'next/image'

interface Initiative {
  title: string
  location: string
  date: string
  image: string
  alt: string
  category: string
  description: string
}

export function Drives() {
  const initiatives: Initiative[] = [
    {
      title: 'Ramadan Food Drive',
      location: 'Old City, Hyderabad',
      date: 'April 2024',
      image: '/images/drive-food.jpg',
      alt: 'Food distribution drive',
      category: 'Food Aid',
      description: 'Distributed 2,000 meal packages to families in need during Ramadan.'
    },
    {
      title: 'Education Support Program',
      location: 'Begumpet, Hyderabad',
      date: 'February 2024',
      image: '/images/drive-education.jpg',
      alt: 'Education program',
      category: 'Education',
      description: 'Provided school supplies and tuition assistance to 500 underprivileged children.'
    },
    {
      title: 'Health Camp 2023',
      location: 'Mir Alam Tank, Hyderabad',
      date: 'December 2023',
      image: '/images/drive-medical.jpg',
      alt: 'Medical health camp',
      category: 'Healthcare',
      description: 'Free medical check-ups and medicines provided to 800+ community members.'
    },
    {
      title: 'Clean Water Initiative',
      location: 'Uppal, Hyderabad',
      date: 'September 2023',
      image: '/images/drive-water.jpg',
      alt: 'Water project',
      category: 'Water',
      description: 'Installed water purification systems in 3 community centers.'
    },
    {
      title: 'Winter Care Drive',
      location: 'Secunderabad, Hyderabad',
      date: 'January 2024',
      image: '/images/drive-clothing.jpg',
      alt: 'Winter clothing distribution',
      category: 'Clothing',
      description: 'Distributed warm clothes and blankets to 1,200 families during winter.'
    },
    {
      title: 'Community Center Build',
      location: 'Charminar, Hyderabad',
      date: 'July 2023',
      image: '/images/drive-shelter.jpg',
      alt: 'Community center',
      category: 'Community',
      description: 'Built a community learning center providing services to 500+ residents.'
    }
  ]

  return (
    <section id="past-initiatives" className="w-full bg-white py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Past Initiatives
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every project represents the trust and compassion of our donors and volunteers. Explore the lives we've touched.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initiatives.map((initiative) => (
            <div key={initiative.title} className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={initiative.image}
                  alt={initiative.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {initiative.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-xl text-foreground mb-2">{initiative.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{initiative.description}</p>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{initiative.location}</span>
                  <span>{initiative.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
