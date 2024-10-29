import ProfilePicture from '../assets/ito.png';
import personalInfo from '../data/personalInfo';

import { useState, useEffect } from 'react'

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
  <section className="bg-black text-white py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-8 md:mb-0 md:mr-12">
          <img
            src={ProfilePicture}
            alt={personalInfo.name}
            width={240}
            height={240}
            className="rounded-full object-cover "
          />
        </div>
        <div 
          className={`text-center md:text-left md:flex-1 transition-all duration-1000 ease-out ${
            isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Innovating at the Edge of Technology</h2>
          <p className="text-xl mb-8 text-gray-300">Software Developer | AI Enthusiast | Linux Aficionado</p>
          <a 
            href="#contact" 
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition duration-300 shadow-md hover:shadow-lg"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
);
}
