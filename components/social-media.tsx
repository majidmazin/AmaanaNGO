import { Instagram, Youtube, Facebook } from 'lucide-react'

export function SocialMedia() {
  const socials = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/amaanafoundation',
      description: 'Follow for daily updates and stories from our drives'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com/amaanafoundation',
      description: 'Join our community and stay connected'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://youtube.com/amaanafoundation',
      description: 'Watch impact videos and testimonials'
    }
  ]

  return (
    <section className="w-full bg-primary py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
            Connect With Us
          </h2>
          <p className="text-lg text-white/90">
            Stay updated on our latest initiatives and impact stories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 transition-all p-8 rounded-lg text-center text-white"
            >
              <social.icon size={48} className="mx-auto mb-4 text-white" />
              <h3 className="font-semibold text-xl mb-2">{social.name}</h3>
              <p className="text-sm text-white/80">{social.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
