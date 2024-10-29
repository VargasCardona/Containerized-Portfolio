import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectSection from '../components/ProjectSection';
import SkillsSection from '../components/SkillsSection';
import LinuxExpertiseSection from '../components/LinuxExpertiseSection';
import ContactSection from '../components/ContactSection';
import ContactForm from '../components/ContactForm';

export default function Portfolio() {
  return (
<Layout>
      <HeroSection />
      <AboutSection /> 
      <ProjectSection />
      <SkillsSection />
      <LinuxExpertiseSection />
      <ContactSection />
      <ContactForm />
</Layout>
  )
}
