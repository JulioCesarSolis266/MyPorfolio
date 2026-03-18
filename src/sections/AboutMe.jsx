import profileImage from "../assets/about-img.jpg";

export default function AboutMe() {
  return (
    <section id="about" className="bg-amber-50 py-24 scroll-mt-24">
      <h2 className="font-bold text-center text-3xl py-8">About Me</h2>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-14 md:gap-20">
        {/* Imagen */}
        <div className="shrink-0">
          <img
            src={profileImage}
            alt="Profile"
            className="w-56 h-56 md:w-80 md:h-80 rounded-full object-cover mx-auto"
          />
        </div>

        {/* Contenido */}
        <div className="m-4 w-full md:max-w-9xl text-xl font-mono p-5 text-black">
          <p>
            React · Next.js · JavaScript · TypeScript · Tailwind · Node.js ·
            Express.js · PostgreSQL · Prisma · MySQL · REST APIs · JWT · RBAC ·
            Swagger (OpenAPI) · Git · GitHub · Vercel · Render
          </p>

          <br />

          <p>
            I build{" "}
            <span className="font-semibold">full-stack web applications</span>{" "}
            end-to-end, developing frontend interfaces with React and Next.js,
            and <span className="font-semibold">scalable backend systems</span>{" "}
            using Node.js and Express.js. I work with{" "}
            <span className="font-semibold">PostgreSQL</span> and{" "}
            <span className="font-semibold">Prisma ORM</span> to design{" "}
            <span className="font-semibold">relational data models</span> and
            ensure{" "}
            <span className="font-semibold">efficient data handling</span>{" "}
            across applications.
          </p>

          <br />

          <p>
            <span className="font-semibold">Backend-focused</span>:
            <span className="font-semibold">
              modular and layered architectures
            </span>
            (routes, controllers, services, middleware),
            <span className="font-semibold">RESTful API design</span>,
            <span className="font-semibold">centralized error handling</span>,
            and
            <span className="font-semibold">secure authentication</span> using
            JWT with
            <span className="font-semibold">
              role-based access control (RBAC)
            </span>
            .
          </p>

          <br />

          <p>
            I have hands-on experience building{" "}
            <span className="font-semibold">real-world applications</span> such
            as appointment management and personal finance systems, implementing
            <span className="font-semibold"> user-based data isolation</span>,
            <span className="font-semibold"> structured workflows</span>, and
            <span className="font-semibold"> API documentation (Swagger)</span>.
            I focus on <span className="font-semibold"> clean code</span>,
            <span className="font-semibold"> maintainability</span>, and
            <span className="font-semibold"> reliable deployment</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
