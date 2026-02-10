import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-black text-white">
      <div className="p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Julio César Solis</h1>
        <nav>
          <ul className="flex gap-4 p-4">
            <li>
              <a href="#main">MAIN</a>
            </li>
            <li>
              <a href="#about">ABOUT</a>
            </li>
            <li>
              <a href="#projects">PROJECTS</a>
            </li>
            <li>
              <a href="#skills">SKILLS</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </nav>
        <div className="flex gap-4">
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
    </header>
  );
}
