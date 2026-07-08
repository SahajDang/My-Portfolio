import { useState, useEffect, useCallback } from "react";
import Navigation from './Navigation';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Certifications from './Certifications';
import Publications from './Publications';
import Resume from "./Resume";
import Contact from './Contact';
import Footer from './Footer';
import LeetCode from "./LeetDSA";
import Experience from "./Experience";
import SolarSystemBackground from "./SolarSystemBackground";
import Panel from "./Panel";

function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const sectionIds = ["hero", "about", "experience", "resume", "leetcode", "projects", "certifications", "publications", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.2, rootMargin: "-100px 0px -100px 0px" }
    );

    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  }, []);

  return (
    <div className="min-h-screen text-[#F8F4FF] relative">
      <SolarSystemBackground />

      <Navigation
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
      />

      <Hero scrollToSection={scrollToSection} />

      <Panel id="about"><About /></Panel>
      <Panel id="experience"><Experience /></Panel>
      <Panel id="resume" className="min-h-[60vh] flex items-center justify-center"><Resume /></Panel>
      <Panel id="leetcode"><LeetCode /></Panel>
      <Panel id="projects"><Projects /></Panel>
      <Panel id="certifications"><Certifications /></Panel>
      <Panel id="publications"><Publications /></Panel>
      <Panel id="contact"><Contact /></Panel>

      <Footer />
    </div>
  );
}

export default Portfolio;