export function Testimonials() {
  const testimonials = [
    {
      quote: "Amaana Foundation came to our aid when we needed it most. The compassion and dedication of their team changed our lives.",
      author: "Fatima Ahmed",
      role: "Beneficiary, Ramadan Drive 2024"
    },
    {
      quote: "As a donor, I've seen firsthand how my contributions help families in need. Amaana's transparency and accountability give me complete confidence.",
      author: "Ahmed Hassan",
      role: "Long-time Donor"
    },
    {
      quote: "Volunteering with Amaana taught me the true meaning of sadaqah. Every moment spent serving our community is a blessing.",
      author: "Zainab Khan",
      role: "Volunteer Coordinator"
    },
    {
      quote: "My children received educational support through this foundation. Now they dream of helping others too. Thank you for believing in us.",
      author: "Rahul Sharma",
      role: "Education Program Parent"
    }
  ]

  return (
    <section id="testimonials" className="w-full bg-secondary py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Stories of Hope
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from those whose lives have been touched by Amaana Foundation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white p-8 rounded-lg">
              <div className="mb-4">
                <div className="flex gap-1 text-primary mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-lg">★</span>
                  ))}
                </div>
              </div>
              <p className="text-foreground mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
