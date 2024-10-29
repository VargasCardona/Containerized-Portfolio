export default function LinuxExpertiseSection() {
  return (
	<section className="bg-gray-50 text-black py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Linux Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-bold mb-2">Debian</h3>
              <p className="text-gray-700">Daily driver for over 3 years. Comfortable with system administration, package management, and customization for development environments.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-bold mb-2">Arch</h3>
              <p className="text-gray-700">Experimented extensively as a secondary system. Appreciate its minimalist approach, rolling release model, and the learning experience it provides.</p>
            </div>
          </div>
        </div>
      </section>

	);
}
