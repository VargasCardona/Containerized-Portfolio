import { Code, Cpu, Terminal, Brain, Server, Eye, Layers, Monitor, Box } from "lucide-react"

const skills = [
  { name: "Python", icon: Code },
  { name: "Java", icon: Cpu },
  { name: "Kotlin", icon: Terminal },
  { name: "AI/ML", icon: Brain },
  { name: "Bash Scripting", icon: Server },
  { name: "Computer Vision", icon: Eye },
  { name: "Augmented Reality", icon: Layers },
  { name: "Linux (Debian/Arch)", icon: Monitor },
  { name: "Docker", icon: Box },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-white text-black py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Technical Proficiencies</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="group">
              <div className="bg-white p-6 rounded-lg text-center flex flex-col items-center shadow-md hover:shadow-xl transition duration-300 hover:scale-105 hover:bg-gray-50 cursor-pointer">
                <skill.icon className="w-12 h-12 mb-4 text-gray-700 group-hover:text-black transition-colors duration-300" />
                <p className="font-bold group-hover:text-black transition-colors duration-300">{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
