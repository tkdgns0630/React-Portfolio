import ProjectItem from "./UI/Project/Project";
import "./ProjectList.css";
import { MyProject } from "../Helpers/MyProjects";

function ProjectList() {
  return (
    <div className="projects">
      <h1> My Personal Projects</h1>
      <div className="projectList">
        {MyProject.map((project, idx) => {
          return (
            <ProjectItem id={idx} name={project.name} image={project.image} />
          );
        })}
      </div>
    </div>
  );
}

export default ProjectList;
