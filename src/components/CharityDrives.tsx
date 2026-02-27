interface CharityDrive {
  id: number;
  title: string;
  date: string;
  location: string;
  beneficiaries: number;
  image: string;
  aspectRatio: 'square' | 'landscape' | 'portrait';
}

const charityDrives: CharityDrive[] = [
  {
    id: 1,
    title: "Winter Relief Campaign 2024",
    date: "December 2024",
    location: "City Wide",
    beneficiaries: 245,
    image: "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600",
    aspectRatio: "landscape"
  },
  {
    id: 2,
    title: "Back to School Initiative",
    date: "August 2024",
    location: "Rural Communities",
    beneficiaries: 189,
    image: "https://images.pexels.com/photos/3781529/pexels-photo-3781529.jpeg?auto=compress&cs=tinysrgb&w=600",
    aspectRatio: "portrait"
  },
  {
    id: 3,
    title: "Emergency Medical Fund",
    date: "June 2024",
    location: "Hospital Partnership",
    beneficiaries: 67,
    image: "https://images.pexels.com/photos/3881082/pexels-photo-3881082.jpeg?auto=compress&cs=tinysrgb&w=600",
    aspectRatio: "square"
  },
  {
    id: 4,
    title: "Food Security Project",
    date: "May 2024",
    location: "Urban Centers",
    beneficiaries: 312,
    image: "https://images.pexels.com/photos/3552633/pexels-photo-3552633.jpeg?auto=compress&cs=tinysrgb&w=600",
    aspectRatio: "landscape"
  },
  {
    id: 5,
    title: "Housing Support Program",
    date: "March 2024",
    location: "Multiple Locations",
    beneficiaries: 156,
    image: "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600",
    aspectRatio: "portrait"
  },
  {
    id: 6,
    title: "Community Skill Training",
    date: "January 2024",
    location: "Training Centers",
    beneficiaries: 198,
    image: "https://images.pexels.com/photos/3652387/pexels-photo-3652387.jpeg?auto=compress&cs=tinysrgb&w=600",
    aspectRatio: "square"
  }
];

function getGridColSpan(aspectRatio: string): string {
  switch (aspectRatio) {
    case 'landscape':
      return 'col-span-1 md:col-span-2';
    case 'portrait':
      return 'col-span-1';
    case 'square':
      return 'col-span-1 md:col-span-1';
    default:
      return 'col-span-1';
  }
}

function getImageHeight(aspectRatio: string): string {
  switch (aspectRatio) {
    case 'landscape':
      return 'h-64 sm:h-72 md:h-80';
    case 'portrait':
      return 'h-96 sm:h-96';
    case 'square':
      return 'h-64 sm:h-72';
    default:
      return 'h-64';
  }
}

function CharityDrives() {
  return (
    <section id="drives" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Charity Drives
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            See the impact we've made through our community initiatives and relief programs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 auto-rows-max">
          {charityDrives.map((drive) => (
            <div
              key={drive.id}
              className={`${getGridColSpan(drive.aspectRatio)} group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300`}
            >
              <div className="relative overflow-hidden bg-gray-200">
                <img
                  src={drive.image}
                  alt={drive.title}
                  className={`${getImageHeight(drive.aspectRatio)} w-full object-cover group-hover:scale-110 transition-transform duration-300`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-4 sm:p-6 bg-white">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {drive.title}
                </h3>
                <div className="space-y-2 text-sm sm:text-base text-gray-600 mb-4">
                  <p className="flex items-center gap-2">
                    <span className="font-semibold text-emerald-600">📅</span> {drive.date}
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-semibold text-emerald-600">📍</span> {drive.location}
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-semibold text-emerald-600">👥</span> {drive.beneficiaries} families helped
                  </p>
                </div>
                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-lg transition font-medium text-sm sm:text-base">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CharityDrives;
