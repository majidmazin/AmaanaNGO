import { Facebook, Instagram, Youtube, Heart } from 'lucide-react';

function SocialMedia() {
  return (
    <section id="social" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-amber-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Follow Our Journey
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Stay connected with daily updates, success stories, and ways you can help
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all group"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-full mb-4 group-hover:scale-110 transition-transform mx-auto">
              <Instagram className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">Instagram</h3>
            <p className="text-gray-600 text-center">
              Follow us for daily stories of hope, impact updates, and community highlights
            </p>
            <div className="mt-4 text-center">
              <span className="text-amber-600 font-semibold">@amanah.foundation</span>
            </div>
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all group"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-full mb-4 group-hover:scale-110 transition-transform mx-auto">
              <Facebook className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">Facebook</h3>
            <p className="text-gray-600 text-center">
              Join our community for fundraisers, events, and direct engagement opportunities
            </p>
            <div className="mt-4 text-center">
              <span className="text-amber-600 font-semibold">Amanah Foundation</span>
            </div>
          </a>

          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all group"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-full mb-4 group-hover:scale-110 transition-transform mx-auto">
              <Youtube className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">YouTube</h3>
            <p className="text-gray-600 text-center">
              Watch documentaries and video testimonials showing the real impact of your support
            </p>
            <div className="mt-4 text-center">
              <span className="text-amber-600 font-semibold">Amanah Channel</span>
            </div>
          </a>
        </div>

        <div className="bg-gradient-to-r from-amber-500 to-yellow-500 rounded-lg p-8 sm:p-12 text-white text-center">
          <div className="flex justify-center mb-4">
            <Heart className="w-8 h-8" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Make a Difference?
          </h3>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Connect with us on social media to share updates, volunteer opportunities, and be part of our growing community of changemakers.
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105"
          >
            Join Us Today
          </a>
        </div>
      </div>
    </section>
  );
}

export default SocialMedia;
