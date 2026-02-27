import { Mail, Phone, MapPin } from 'lucide-react';

function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have questions? Want to volunteer? Reach out to us directly
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-amber-500 rounded-full mb-4">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
            <a href="mailto:hello@amanah.org" className="text-amber-600 hover:text-amber-700 transition">
              hello@amanah.org
            </a>
            <p className="text-gray-600 text-sm mt-2">We respond within 24 hours</p>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-amber-500 rounded-full mb-4">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
            <a href="tel:+923001234567" className="text-amber-600 hover:text-amber-700 transition">
              +92 300 1234567
            </a>
            <p className="text-gray-600 text-sm mt-2">Call us during business hours</p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-amber-500 rounded-full mb-4">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
            <p className="text-gray-700">
              Hyderabad, Pakistan
            </p>
            <p className="text-gray-600 text-sm mt-2">Open Monday to Friday</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 sm:p-12 rounded-lg">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Send us a Message</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 w-full"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 w-full"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 w-full"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 w-full"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
