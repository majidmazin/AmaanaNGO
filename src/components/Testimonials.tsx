interface Testimonial {
  id: number;
  name: string;
  story: string;
  relation: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Amira Khan",
    story: "When my husband lost his job, Amanah was there for us. The emergency support helped us pay rent and buy essentials. Now he's found work again, and we're forever grateful.",
    relation: "Beneficiary, Single Mother of Two"
  },
  {
    id: 2,
    name: "Hassan Ahmed",
    story: "The skill training program changed my life. I learned carpentry and now I'm self-employed. Amanah didn't just give us aid—they gave us hope and opportunity.",
    relation: "Program Graduate, Community Leader"
  },
  {
    id: 3,
    name: "Fatima Ali",
    story: "I was struggling to keep my children in school. Amanah's education support made it possible. My daughter is now the top student in her class.",
    relation: "Beneficiary, Working Mother"
  }
];

function Testimonials() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Stories of Hope
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Real stories from real people whose lives have been transformed by your support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.story}"
              </p>
              <div>
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.relation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
