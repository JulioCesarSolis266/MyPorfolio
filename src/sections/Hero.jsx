import Header from "../components/layout/Header.jsx";

export default function Hero() {
  return (
    <>
      <Header />

      <section id="hero" className="relative min-h-screen">
        {/* Fondo */}
        <div className="relative bg-[url('/Hero-image2.jpeg')] bg-cover bg-center md:bg-fixed min-h-screen flex items-center justify-center">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20"></div>

          {/* Contenido */}
          <div className="relative z-10 text-white text-center px-6 max-w-4xl mx-auto">
            {/* Intro */}
            <p className="text-base sm:text-lg md:text-xl">Hi there!</p>

            {/* Nombre + Rol */}
            <h1 className="mt-4 font-semibold leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              I’m{" "}
              <span className="font-bold text-cyan-500">Julio César Solis</span>
              <span className="block mt-2 text-lg sm:text-xl md:text-2xl font-normal">
                Fullstack Developer (React + Node.js)
              </span>
            </h1>

            {/* Descripción principal */}
            <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
              I design and build{" "}
              <span className="font-semibold text-white">
                scalable SaaS applications
              </span>{" "}
              with{" "}
              <span className="font-semibold text-white">
                multi-tenant architectures
              </span>
              , focusing on{" "}
              <span className="font-semibold text-white">
                clean backend design
              </span>
              ,{" "}
              <span className="font-semibold text-white">
                secure authentication (JWT)
              </span>{" "}
              and{" "}
              <span className="font-semibold text-white">
                role-based access control (RBAC)
              </span>
              .
            </p>

            {/* Stack + enfoque técnico */}
            <p className="mt-4 text-base sm:text-lg md:text-lg text-gray-300 leading-relaxed">
              Specialized in{" "}
              <span className="text-white">REST API development</span>,{" "}
              <span className="text-white">modular architectures</span> and{" "}
              <span className="text-white">
                database design with PostgreSQL, Prisma ORM and Supabase
              </span>
              .
            </p>

            {/* Valor */}
            <p className="mt-4 text-base sm:text-lg md:text-lg text-gray-300 leading-relaxed">
              I build web applications that transform manual processes into{" "}
              <span className="text-white">
                efficient, scalable web platforms
              </span>{" "}
              ready for production environments.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/JulioCesarSolis-resume.pdf"
                download
                className="px-5 py-2.5 bg-white text-black text-sm sm:text-base font-semibold rounded-lg hover:bg-gray-200 transition"
              >
                Download CV
              </a>

              <a
                href="#projects"
                className="px-5 py-2.5 border border-white text-sm sm:text-base font-semibold rounded-lg hover:bg-white hover:text-black transition"
              >
                View Projects
              </a>
            </div>

            {/* Proof */}
            <p className="mt-6 text-base sm:text-lg text-gray-400 leading-relaxed">
              2+ production-ready applications · API documentation (Swagger) ·
              Cloud deployment (Vercel / Render)
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
