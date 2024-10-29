import { ExternalLink, Eye, Hand, Bird, Tv, Github } from "lucide-react"

export default function ProjectSection() {
  const projects = [
    {
      title: "Cascade-Workbench",
      description: "Minimalistic graphical interface for visualizing and tuning Haar Cascade object detection models.",
      tech: "Python",
      icon: Eye,
      link: "https://github.com/VargasCardona/Cascade-Workbench"
    },
    {
      title: "AirMouse",
      description: "Computer vision application that enables natural interaction with digital interfaces using hand movements and gestures.",
      tech: "Python",
      icon: Hand,
      link: "https://github.com/VargasCardona/AirMouse"
    },
    {
      title: "AviAR",
      description: "Augmented reality (AR) android application that overlays 3D bird models onto the user's surroundings.",
      tech: "ShaderLab",
      icon: Bird,
      link: "https://github.com/VargasCardona/AviAR"
    },
    {
      title: "AnalogVHS",
      description: "Unity project that implements a first-person horror game set within an industrial environment.",
      tech: "ShaderLab",
      icon: Tv,
      link: "https://github.com/VargasCardona/AnalogVHS"
    }
  ]

  return (
    <section id="projects" className="bg-gray-50 py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-50 mix-blend-multiply">
      </div>
      <div className="max-w-6xl mx-auto relative z-100">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-primary">
              <div className="flex items-center mb-4">
                <project.icon className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
              </div>
              <p className="mb-4 text-gray-600 leading-relaxed">{project.description}</p>
              <p className="text-sm text-gray-500 mb-4">Tech: {project.tech}</p>
              <a
                href={project.link}
                className="inline-flex items-center px-4 py-2 bg-black text-white rounded-lg hover:bg-primary-dark transition-colors duration-200 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 mr-2" />
                View on GitHub
                <ExternalLink className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
