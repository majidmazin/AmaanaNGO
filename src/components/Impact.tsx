import { useEffect, useState } from 'react';

interface StatProps {
  value: number;
  label: string;
  suffix?: string;
}

function AnimatedStat({ value, label, suffix = '' }: StatProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2;
    const increment = end / (duration * 60);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="text-center">
      <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-600 mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-gray-600 text-lg">{label}</div>
    </div>
  );
}

function Impact() {
  return (
    <section id="impact" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Impact
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Every donation makes a tangible difference. Here's what we've accomplished together
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-16">
          <AnimatedStat value={1247} label="Families Supported" />
          <AnimatedStat value={3500000} label="Donations Distributed" suffix=" PKR" />
          <AnimatedStat value={89} label="Community Partners" />
          <AnimatedStat value={156} label="Active Volunteers" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-lg">
            <div className="text-4xl mb-4">🏠</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Housing Assistance</h3>
            <p className="text-gray-700">
              We provide emergency housing support, repair funds, and connections to shelter programs for families in crisis.
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-lg">
            <div className="text-4xl mb-4">🍽️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Food Security</h3>
            <p className="text-gray-700">
              Monthly food distributions and partnerships with local markets ensure families never go hungry.
            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-emerald-50 p-8 rounded-lg">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Education Support</h3>
            <p className="text-gray-700">
              Scholarships, school supplies, and educational programs help children break the cycle of poverty.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Impact;
