import { useParams } from "react-router-dom";
import { MyProject } from "../Helpers/MyProjects";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./ProjectDisplay.css";
import { useNavigate } from "react-router-dom";

function ProjectDisaplay() {
  const navigate = useNavigate();
  const { id } = useParams();
  const project = MyProject[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image}></img>
      <p>
        <b>skills:</b> {project.skills}
      </p>
      <GitHubIcon
        style={{ cursor: "grab" }}
        onClick={() => {
          navigate("//" + project.link);
        }}
      />
    </div>
  );
}

export default ProjectDisaplay;
