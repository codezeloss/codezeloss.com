import Button from "../Button/Button";
import ProjectItem from "./ProjectItem";
import { data } from "./data";

const Projects = () => {
  return (
    <section className="mb-36 2bp:mb-24">
      <div className="flex items-center justify-between mb-20">
        <h1>Projects</h1>
        <Button text="Contact me" />
      </div>

      <div className="grid grid-cols-2 gap-x-8 gap-y-16 6bp:grid-cols-1 6bp:mx-auto">
        {data.map(project => (
          <ProjectItem
          key={project.id}
          src={project.image}
          title={project.title}
          techs={project.techs}
          preview={project.live_url}
          code={project.code_url}
        /> 
        ))}
      </div>
    </section>
  );
};
export default Projects;


