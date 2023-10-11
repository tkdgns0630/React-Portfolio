import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Homepage.css";

function HomePage() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, my name is Michael</h2>
        <div className="prompt">
          <p>
            A full stack developer whos got passion for web development and
            software technologies.
          </p>
          <FacebookIcon />
          <GitHubIcon />
          <LinkedInIcon />
        </div>
      </div>
      <div className="skills">
        {" "}
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>ReactJS,Angular,HTML,CSS,NPM,BootStrap,MaterialUI</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS,ExpressJS,GraphQL,MySQL,MongoDB</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default HomePage;
