import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Cpu, Terminal, Brain, Server, Eye, Layers, Monitor, Box } from 'lucide-react'
import personalInfo from '../data/personalInfo';

export default function ContactSection() {
  return (
	<section id="contact" className="bg-white py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Contact Information</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center">
                <Mail className="w-6 h-6 mr-3 text-gray-600" />
                <p>{personalInfo.email}</p>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 mr-3 text-gray-600" />
                <p>{personalInfo.phone}</p>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 mr-3 text-gray-600" />
                <p>{personalInfo.address}</p>
              </div>
              <div className="flex items-center">
                <Github className="w-6 h-6 mr-3 text-gray-600" />
                <a href={personalInfo.github} className="text-black hover:underline hover:text-gray-600 transition duration-300">{personalInfo.github.split('//')[1]}</a>
              </div>
              <div className="flex items-center">
                <Linkedin className="w-6 h-6 mr-3 text-gray-600" />
                <a href={personalInfo.linkedin} className="text-black hover:underline hover:text-gray-600 transition duration-300">{personalInfo.linkedin.split('//')[1]}</a>
              </div>
            </div>
          </div>
        </div>
      </section>
	);
}
