import ProjectItem from "./UI/Project/Project";
import project1 from "../assets/Blog.png";
import project2 from "../assets/EmployeeTrack.png";
import project3 from "../assets/Express-Sequalise-Ecommerce.png";
import project4 from "../assets/RecipeBook.jpg";
import "./ProjectList.css";

function ProjectList() {
  return (
    <div className="projects">
      <h1> My Personal Projects</h1>
      <div className="projectList">
        <ProjectItem name="Blog" image={project1} />
        <ProjectItem name="EmployeeTracker" image={project2} />
        <ProjectItem
          name="Express-Sequalise-Ecommerce-Backend"
          image={project3}
        />
        <ProjectItem name="Recipe-Book" image={project4} />
      </div>
    </div>
  );
}

export default ProjectList;
