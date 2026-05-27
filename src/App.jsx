import { useState, useEffect } from "react";
import "./styles/global.css";

import { NAV_IDS } from "./data";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar          from "./components/Navbar";
import HeroSection     from "./components/HeroSection";
import AboutSection    from "./components/AboutSection";
import SkillsSection   from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection  from "./components/ContactSection";
import Footer          from "./components/Footer";

export default function App() {
  const [scrolled,      setScrolled]      = useState(false);
  const [menuOpen,      setMenuOpen]      = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      for (let i = NAV_IDS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_IDS[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(NAV_IDS[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll(".fade-in-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.08 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <LanguageProvider>
      <Navbar
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        activeSection={activeSection}
        scrollTo={scrollTo}
      />
      <HeroSection     scrollTo={scrollTo} />
      <AboutSection    />
      <SkillsSection   />
      <ProjectsSection />
      <ContactSection  />
      <Footer          />
    </LanguageProvider>
  );
}
