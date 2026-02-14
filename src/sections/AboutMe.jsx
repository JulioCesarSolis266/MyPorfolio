import profileImage from "../assets/about-img.jpg";

export default function AboutMe() {
  return (
    <section id="about" className="bg-amber-50 py-20 scroll-mt-24">
      <h2 className="font-bold m-4 text-center text-3xl py-5">About Me</h2>

      <div>
        <img
          src={profileImage}
          alt="Profile"
          className="w-48 h-48 rounded-full mx-auto object-cover m-10"
        />
      </div>

      <div className="m-4 max-w-3xl mx-auto text-xl font-mono p-5">
        <p>
          Junior Full-Stack Developer building end-to-end web applications with React.js and Node.js, covering user interfaces, REST APIs, authentication, SQL databases and cloud deployment.
        </p>

        <br />

        <p>
          I hold a Higher Technician Degree in Programming and focus on writing clean, maintainable code, continuously improving through real-world projects.
        </p>

      </div>
    </section>
  );
}