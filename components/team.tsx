import Image from 'next/image'

export function Team() {
  const team = [
    {
      name: 'Dr. Mohammed Hussain',
      role: 'Founder & President',
      description: 'Visionary leader dedicated to serving communities for over 15 years.'
    },
    {
      name: 'Aisha Begum',
      role: 'Executive Director',
      description: 'Oversees all programs and ensures transparency in every initiative.'
    },
    {
      name: 'Khalid Ahmed',
      role: 'Programs Manager',
      description: 'Coordinates field operations and community engagement across Hyderabad.'
    },
    {
      name: 'Priya Sharma',
      role: 'Finance Officer',
      description: 'Ensures proper accountability and ethical use of all donations.'
    }
  ]

  return (
    <section id="team" className="w-full bg-white py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dedicated professionals and volunteers committed to making a difference
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-full"></div>
              <h3 className="font-semibold text-lg text-foreground mb-2">{member.name}</h3>
              <p className="text-primary font-medium mb-3">{member.role}</p>
              <p className="text-muted-foreground text-sm">{member.description}</p>
            </div>
          ))}
        </div>

        {/* Volunteer CTA */}
        <div className="bg-primary rounded-lg p-12 text-center text-white">
          <h3 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
            Join Our Team
          </h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-95">
            We're always looking for passionate volunteers to help us serve our community. Every hand makes a difference.
          </p>
          <a
            href="https://instagram.com/amaanafoundation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-white text-primary rounded-lg hover:bg-opacity-90 transition-all font-semibold"
          >
            Become a Volunteer
          </a>
        </div>
      </div>
    </section>
  )
}
