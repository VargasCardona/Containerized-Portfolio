import personalInfo from '../data/personalInfo';

export default function AboutSection() {
  return (
      <section id="about" className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">About Me</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="mb-4 text-gray-700 leading-relaxed">{personalInfo.about}</p>
          </div>
        </div>
      </section>
	);
}
