import Hero from "./sections/Hero";
import AboutMe from "./sections/AboutMe";
import "./styles/main.css";
import Skills from "./sections/Skills";
import ProjectCard from "./sections/ProjectCard";
import Footer from "./components/layout/Footer";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="scroll-smooth">
      <Hero id="hero" />
      <AboutMe id="about" />
      <Skills id="skills" />
      <ProjectCard id="projects" />
      <Contact id="contact" />
      <Footer />
    </div>
  );
}

export default App;
