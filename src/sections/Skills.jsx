import { FaHtml5, FaReact, FaNode, FaGitAlt, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill, RiJavascriptFill, RiSupabaseLine } from "react-icons/ri";
import { SiExpress, SiNestjs, SiPostgresql, SiPostman, SiRender } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { IoLogoVercel } from "react-icons/io5";
import { BiLogoVisualStudio } from "react-icons/bi";

export default function Skills() {
  return (
    <section id="skills" className=" px-6 scroll-mt-24">
      <h2 className="font-bold mb-12 text-center text-3xl p-20">Skills</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto font-mono">
        
        {/* Frontend */}
        <div className="p-8 bg-pink-100 rounded-lg hover:bg-pink-200 text-center transition">
          <h3 className="text-2xl font-semibold mb-4">Frontend</h3>
          <ul className="space-y-2">
            <li><FaHtml5 className="inline mr-2" />HTML</li>
            <li><RiTailwindCssFill className="inline mr-2" />Tailwind CSS</li>
            <li><RiJavascriptFill className="inline mr-2" />JavaScript (ES6+)</li>
            <li><FaReact className="inline mr-2" />React.js</li>
          </ul>
        </div>

        {/* Backend */}
        <div className="p-8 bg-blue-100 rounded-lg hover:bg-blue-200 text-center transition">
          <h3 className="text-2xl font-semibold mb-4">Backend</h3>
          <ul className="space-y-2">
            <li><FaNode className="inline mr-2" />Node.js</li>
            <li><SiExpress className="inline mr-2" />Express.js</li>
            <li><SiNestjs className="inline mr-2" />NestJS</li>
          </ul>
        </div>

        {/* Database */}
        <div className="p-8 bg-gray-100 rounded-lg hover:bg-gray-200 text-center transition">
          <h3 className="text-2xl font-semibold mb-4">Databases</h3>
          <ul className="space-y-2">
            <li><SiPostgresql className="inline mr-2" />PostgreSQL</li>
            <li><GrMysql className="inline mr-2" />MySQL</li>
          </ul>
        </div>

        {/* Tools */}
        <div className="p-8 bg-orange-100 rounded-lg hover:bg-orange-200 text-center transition">
          <h3 className="text-2xl font-semibold mb-4">Tools</h3>
          <ul className="space-y-2">
            <li><FaGitAlt className="inline mr-2" />Git</li>
            <li><FaGithub className="inline mr-2" />GitHub</li>
            <li><SiPostman className="inline mr-2" />Postman</li>
            <li><IoLogoVercel className="inline mr-2" />Vercel</li>
            <li><SiRender className="inline mr-2" />Render</li>
            <li><RiSupabaseLine className="inline mr-2" />Supabase</li>
            <li><BiLogoVisualStudio className="inline mr-2" />VS Code</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
