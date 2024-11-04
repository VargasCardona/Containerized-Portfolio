import { useState, useEffect } from 'react'
import personalInfo from '../data/personalInfo';

export default function Header() {
const [activeSection, setActiveSection] = useState('')

  const personalInfo = {
    name: "Nicolás Vargas Cardona"
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'skills', 'contact']
      let current = ''

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element && window.scrollY >= element.offsetTop - 100) {
          current = section
        }
      }

      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
  {/* 
  {isVisible && (
    <div className="bg-blue-600 text-white py-2 px-4 text-center">
      <p className="text-sm font-medium">Welcome to my portfolio! Explore my projects and skills below.</p>
    </div>
  )}
  */}
      <header className="bg-black text-white py-4 px-6 md:px-12 lg:px-24 sticky top-0 z-10 shadow-md border-b border-white/10">
        <nav className="flex flex-col sm:flex-row justify-between items-center max-w-9xl mx-auto">

          <h1 className="text-2xl md:text-10xl lg:text-2xl font-bold mb-0">{personalInfo.name}</h1>
          <ul className="flex space-x-2 sm:space-x-6">
            {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <li key={item}>
                <button
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`px-3 py-2 rounded-md text-sm font-medium transition duration-300 hover:bg-white/10 hover:text-gray-300 ${
                  activeSection === item.toLowerCase() ? 'bg-white/10 text-gray-300' : ''
                }`}
              >
                {item}
              </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}

