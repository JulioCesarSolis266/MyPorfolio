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
          I’m a Junior Full-Stack Developer with experience in React.js and
          Node.js, focused on building functional web applications from end to
          end. I enjoy connecting the frontend with the backend and turning ideas
          into real, working projects.
        </p>

        <br />

        <p>
          I hold a degree as a Higher Technician in Programming, which gave me a
          strong foundation in programming logic and good development practices.
          I continue learning constantly by building personal projects and
          exploring new technologies. I consider myself proactive, responsible,
          and always motivated to keep growing as a developer.
        </p>
      </div>
    </section>
  );
}