import Hero from "./sections/Hero";
import AboutMe from "./sections/AboutMe";
import "./styles/main.css";
import Skills from "./sections/Skills";
import ProjectCard from "./sections/ProjectCard";
import Footer from "./components/layout/Footer";
import Contact from "./sections/Contact";

function App() {
  return (
    <>

      <Hero />
      <AboutMe />
      <Skills />
      <ProjectCard />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
