import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Homepage.css";
import { useNavigate } from "react-router-dom";
import Yun from "../assets/SanghunYun.jpg";
import { Image } from "semantic-ui-react";

function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="home">
      <div className="about">
        <Image
          src={Yun}
          alt="Sanghun Yun"
          style={{ height: "200px", borderRadius: "30%" }}
        />
        <h2>Hi, my name is Michael</h2>
        <div className="prompt">
          <p>
            A full stack developer whos got passion for web development and
            software technologies.
          </p>
          <LinkedInIcon
            style={{ cursor: "grab" }}
            onClick={() => {
              navigate(
                "//https://www.linkedin.com/in/sanghun-michael-yun-ab436b168/"
              );
            }}
          />
          <FacebookIcon
            style={{ cursor: "grab" }}
            onClick={() => {
              navigate("//https://www.facebook.com/sanghun.yun.9279");
            }}
          />
          <GitHubIcon
            style={{ cursor: "grab" }}
            onClick={() => {
              navigate("//https://github.com/tkdgns0630");
            }}
          />
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
