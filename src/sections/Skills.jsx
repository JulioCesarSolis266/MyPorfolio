import { FaHtml5, FaReact, FaNode, FaGitAlt, FaGithub } from "react-icons/fa";
import {
  RiTailwindCssFill,
  RiJavascriptFill,
  RiSupabaseLine,
} from "react-icons/ri";
import {
  SiExpress,
  SiNestjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiRender,
  SiSwagger,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { IoLogoVercel } from "react-icons/io5";
import { BiLogoVisualStudio } from "react-icons/bi";

export default function Skills() {
  const cardBase =
    "p-8 min-h-[260px] md:min-h-[300px] rounded-lg text-center transition flex flex-col items-center justify-center";

  return (
    <section id="skills" className="px-6 py-20 scroll-mt-24">
      <h2 className="font-bold mb-16 text-center text-3xl">Skills</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto font-mono">
        {/* Frontend */}
        <div className={`${cardBase} bg-pink-100 hover:bg-pink-200`}>
          <h3 className="text-2xl font-semibold mb-6">Frontend</h3>
          <ul className="space-y-2">
            <li>
              <FaHtml5 className="inline mr-2" />
              HTML
            </li>
            <li>
              <RiTailwindCssFill className="inline mr-2" />
              Tailwind CSS
            </li>
            <li>
              <RiJavascriptFill className="inline mr-2" />
              JavaScript (ES6+)
            </li>
            <li>
              <FaReact className="inline mr-2" />
              React.js
            </li>
          </ul>
        </div>

        {/* Backend */}
        <div className={`${cardBase} bg-blue-100 hover:bg-blue-200`}>
          <h3 className="text-2xl font-semibold mb-6">Backend</h3>
          <ul className="space-y-2">
            <li>
              <FaNode className="inline mr-2" />
              Node.js
            </li>
            <li>
              <SiExpress className="inline mr-2" />
              Express.js
            </li>
            <li>REST APIs</li>
            <li>
              <SiPrisma className="inline mr-2" />
              Prisma
            </li>
          </ul>
        </div>

        {/* Databases */}
        <div className={`${cardBase} bg-gray-100 hover:bg-gray-200`}>
          <h3 className="text-2xl font-semibold mb-6">Databases</h3>
          <ul className="space-y-2">
            <li>
              <SiPostgresql className="inline mr-2" />
              PostgreSQL
            </li>
            <li>
              <GrMysql className="inline mr-2" />
              MySQL
            </li>
          </ul>
        </div>

        {/* Tools */}
        <div className={`${cardBase} bg-orange-100 hover:bg-orange-200`}>
          <h3 className="text-2xl font-semibold mb-6">Tools</h3>
          <ul className="space-y-2">
            <li>
              <FaGitAlt className="inline mr-2" />
              Git
            </li>
            <li>
              <FaGithub className="inline mr-2" />
              GitHub
            </li>
            <li>
              <SiPostman className="inline mr-2" />
              Postman
            </li>
            <li>
              <IoLogoVercel className="inline mr-2" />
              Vercel
            </li>
            <li>
              <SiRender className="inline mr-2" />
              Render
            </li>
            <li>
              <RiSupabaseLine className="inline mr-2" />
              Supabase
            </li>
            <li>
              <BiLogoVisualStudio className="inline mr-2" />
              VS Code
            </li>
            <li>
              <SiSwagger className="inline mr-2" />
              Swagger
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
