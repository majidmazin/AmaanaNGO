import { Heart, Users, Target } from 'lucide-react';

function About() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About Amanah
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We believe everyone deserves dignity, hope, and the opportunity to build a better future
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-lg">
            <Heart className="w-12 h-12 text-emerald-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
            <p className="text-gray-700">
              To provide immediate relief and long-term support to families and individuals facing financial hardship, ensuring they have access to food, shelter, and essential services.
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-lg">
            <Users className="w-12 h-12 text-teal-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Community</h3>
            <p className="text-gray-700">
              With supporters across the globe, Amanah operates with transparency and accountability. Every donation directly impacts lives and creates sustainable change.
            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-emerald-50 p-8 rounded-lg">
            <Target className="w-12 h-12 text-cyan-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Values</h3>
            <p className="text-gray-700">
              Integrity, compassion, and inclusivity guide everything we do. We measure success not by numbers, but by the real lives we touch and transform.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg p-8 sm:p-12 text-white">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Why Your Support Matters</h3>
          <p className="text-lg leading-relaxed mb-6">
            In many communities, families struggle with basic necessities. Medical emergencies, job loss, or unexpected crises can devastate a family's stability. Amanah steps in to bridge the gap, providing emergency relief and pathways to recovery. Your generosity transforms lives and builds stronger communities.
          </p>
          <p className="text-lg leading-relaxed">
            When you support Amanah, you're not just giving money—you're giving hope, dignity, and a second chance.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
