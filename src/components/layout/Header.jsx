import { useState } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black/90 text-white fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        
        <h1 className="text-lg sm:text-xl font-bold">
          Julio César Solis
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex gap-6">
            <li><a href="#hero" className="hover:text-gray-300 scroll-mt-24">MAIN</a></li>
            <li><a href="#about" className="hover:text-gray-300 scroll-mt-24">ABOUT</a></li>
            <li><a href="#skills" className="hover:text-gray-300 scroll-mt-24">SKILLS</a></li>
            <li><a href="#projects" className="hover:text-gray-300 scroll-mt-24">PROJECTS</a></li>
            <li><a href="#contact" className="hover:text-gray-300 scroll-mt-24">CONTACT</a></li>
          </ul>
        </nav>

        {/* Icons Desktop */}
        <div className="hidden md:flex gap-4">
          <a
            href="https://www.linkedin.com/in/juliocsolis/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FaLinkedin className="text-xl" />
          </a>
          <a
            href="https://www.github.com/JulioCesarSolis266"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FaGithub className="text-xl" />
          </a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 px-4 pb-6">
          <ul className="flex flex-col gap-4 text-center">
            <li><a href="#main" onClick={() => setMenuOpen(false)}>MAIN</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>ABOUT</a></li>
            <li><a href="#skills" onClick={() => setMenuOpen(false)}>SKILLS</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)}>PROJECTS</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>CONTACT</a></li>
          </ul>

          <div className="flex justify-center gap-6 mt-6">
            <a
              href="https://www.linkedin.com/in/juliocsolis/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a
              href="https://www.github.com/JulioCesarSolis266"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-xl" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
