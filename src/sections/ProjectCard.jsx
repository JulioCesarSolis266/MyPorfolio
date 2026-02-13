import Card from "../components/ui/Card";
import projects from "../data/projects";

export default function ProjectCard() {
  return (
    <>
      <section
        id="projects"
        className="max-w-5xl mx-auto m-4 py-20 scroll-mt-24"
      >
        <h2 className="font-bold m-4 text-center text-3xl pb-15">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              title={project.title}
              description={project.description}
              img={project.img}
              urlDeploy={project.urlDeploy}
              urlRepoBackend={project.urlRepoBackend}
            />
          ))}
        </div>
      </section>
    </>
  );
}
