export default function ContactForm() {
  return (
	<section className="bg-black text-white py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-white-800">Get in Touch</h2>
          <form className="bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-bold mb-2 text-gray-700">Name</label>
              <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black bg-gray-100 text-black" required />
            
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-bold mb-2 text-gray-700">Email</label>
              <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black bg-gray-100 text-black" required />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-bold mb-2 text-gray-700">Message</label>
              <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black bg-gray-100 text-black" required></textarea>
            </div>
            <button type="submit" className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition duration-300 shadow-md hover:shadow-lg hover:scale-105">Send Message</button>
          </form>
        </div>
      </section>
	);
}
