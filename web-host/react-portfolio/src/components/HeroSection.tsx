import ProfilePicture from '../assets/ito.png';
import personalInfo from '../data/personalInfo';

import { ArrowRight, Server, Database, Blocks } from 'lucide-react'
import Link from "next/link"
import { motion } from 'framer-motion'
import { Button } from "../components/ui/button"

import { useState, useEffect } from 'react'

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])


  return (
  <section className="min-h-screen bg-black text-white flex items-center relative overflow-hidden">
        <div className="container mx-auto px-6 py-24 relative z-100" style={{ paddingTop: "4.5rem"}}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              >
                Innovating at the Edge of Technology
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl opacity-70 mb-8"
              >
                Software Developer | AI Enthusiast | Linux Aficionado
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button
                  className="bg-white text-black hover:bg-white/90 text-lg px-8 py-6"
                  onClick={() => document.getElementById('contactForm')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  className="bg-white text-black hover:bg-white/90 text-lg px-8 py-6"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Projects
                </Button>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative"
            >
              <div className="aspect-square rounded-full border border-white/10 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-black">
                  <img
                    src={ProfilePicture}
                    alt="Artistic Illustration"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <motion.div
                className="absolute inset-0 rounded-full border border-white/10"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12"
          >
            {[
              { number: "5+", label: "Years Experience" },
              { number: "50+", label: "Projects Completed" },
              { number: "20+", label: "Open Source Contributions" },
              { number: "100%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base opacity-70">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
);
}
