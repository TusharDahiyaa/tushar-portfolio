import Navbar from "./components/Navbar";
import MainHeader from "./components/MainHeader";
import "./App.css";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { Contact } from "./components/Contact";
import Footer from "./components/Footer";
import { useRef } from "react";
import Services from "./components/Services";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const handleNavClick = (ref: any) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  document.documentElement.classList.add("dark");

  return (
    <>
      <Navbar
        onNavClick={handleNavClick}
        navRefs={{
          homeRef,
          aboutRef,
          skillsRef,
          servicesRef,
          projectsRef,
          contactRef,
        }}
      />
      <div id="header" ref={homeRef}>
        <MainHeader />
      </div>
      <div id="about" ref={aboutRef} className="pt-20">
        <About />
      </div>
      <div id="skills" ref={skillsRef} className="pt-16">
        <Skills />
      </div>
      <div id="services" ref={servicesRef} className="pt-16">
        <Services />
      </div>
      <div id="projects" ref={projectsRef} className="pt-16">
        <Projects />
      </div>
      <div id="contact" ref={contactRef} className="pt-16">
        <Contact />
      </div>
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
