function Team() {
  const teamMembers = [
    {
      id: 1,
      name: "Saira Khan",
      role: "Founder & Executive Director",
      image: "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Leading Amanah's vision with 15+ years of experience in community development and charitable work."
    },
    {
      id: 2,
      name: "Ali Ahmed",
      role: "Operations Manager",
      image: "https://images.pexels.com/photos/3781529/pexels-photo-3781529.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Ensures efficient delivery of aid programs and coordinates with community partners across regions."
    },
    {
      id: 3,
      name: "Hira Malik",
      role: "Program Coordinator",
      image: "https://images.pexels.com/photos/3881082/pexels-photo-3881082.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Manages education and skill-training initiatives, transforming lives one program at a time."
    },
    {
      id: 4,
      name: "Hassan Ali",
      role: "Community Liaison",
      image: "https://images.pexels.com/photos/3552633/pexels-photo-3552633.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Bridges the gap between Amanah and beneficiary communities, ensuring voices are heard."
    }
  ];

  return (
    <section id="team" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Team
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Dedicated professionals working tirelessly to bring hope and change to communities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden bg-gray-200 h-64">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-amber-600 font-semibold text-sm mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Join Our Team
          </h3>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Are you passionate about making a difference? We're always looking for dedicated volunteers and team members.
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition transform hover:scale-105"
          >
            Get Involved
          </a>
        </div>
      </div>
    </section>
  );
}

export default Team;
