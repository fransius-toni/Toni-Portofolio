import ParticlesBackground from './components/ui/ParticlesBackground';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Certificates from './components/sections/Certificates';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <div className="relative min-h-screen bg-navy-950 text-text-primary">
      {/* Subtle background particles and ambient glow */}
      <ParticlesBackground />

      {/* Fixed navigation bar */}
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        {/* Certificates renders null when no real certificates are present */}
        <Certificates />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
