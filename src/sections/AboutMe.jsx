import profileImage from "../assets/about-img.jpg";

export default function AboutMe() {
  return (
    <section id="about" className="bg-amber-50 py-24 scroll-mt-24">
      <h2 className="font-bold text-center text-3xl py-8">About Me</h2>

      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-14 md:gap-20">
        {/* Imagen */}
        <div className="shrink-0">
          <img
            src={profileImage}
            alt="Profile"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover mx-auto"
          />
        </div>

        {/* Contenido */}
        <div className="text-xl font-mono text-center md:text-left leading-relaxed space-y-6">
          <p>
            Full-Stack Developer specialized in building scalable web
            applications using React, Node.js and PostgreSQL, covering user
            interfaces, RESTful APIs, authentication, SQL databases and cloud
            deployment.
          </p>

          <p>
            Experienced in designing modular backend architectures, implementing
            JWT authentication and role-based access control (RBAC), with a
            strong focus on clean, maintainable code and separation of concerns.
            Hands-on experience through real-world projects using Prisma ORM and
            modern deployment workflows.
          </p>
        </div>
      </div>
    </section>
  );
}
