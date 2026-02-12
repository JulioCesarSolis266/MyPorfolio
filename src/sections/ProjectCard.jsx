import Card from "../components/ui/Card";
import projects from "../data/projects";

export default function ProjectCard() {
  return (
    <>
    <h2 className="font-bold m-4 text-center text-3xl pt-20">
          Projects
        </h2>
    <section className="max-w-5xl mx-auto px-4 py-10">
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
