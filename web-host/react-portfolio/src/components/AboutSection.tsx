import personalInfo from '../data/personalInfo';
import { Terminal, Code2, Cpu, Database, Server, Blocks } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutSection() {
  return (
      <section id="about" className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">About Me</h2>
        
        <div className="grid md:grid-cols-1 gap-10 items-center">

          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Technical Expertise</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Server className="w-5 h-5 text-primary" />
                <span>Advanced containerization with Docker and orchestration with Kubernetes</span>
              </div>
              <div className="flex items-center gap-2">
                <Database className="w-5 h-5 text-primary" />
                <span>Database optimization and distributed systems architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <Blocks className="w-5 h-5 text-primary" />
                <span>Full-stack development with modern frameworks and technologies</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <p className="text-lg leading-relaxed">
              I'm a passionate software developer with a deep interest in cutting-edge technologies and system architecture. My expertise spans from low-level system operations to high-level application design.
            </p>
            <p className="text-lg leading-relaxed">
              With a strong foundation in Linux systems, particularly Debian and Arch distributions, I bring a comprehensive understanding of operating system internals to my development work. This knowledge enhances my ability to create efficient, scalable solutions.
            </p>
            <p className="text-muted-foreground">
              Currently exploring: Edge Computing, Rust Programming, and Advanced AI Applications
            </p>
          </div>
        </div>
      </div>
    </section>
	);
}
