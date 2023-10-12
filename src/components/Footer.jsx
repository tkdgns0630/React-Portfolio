import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Footer.css";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <div className="footer">
      <div className="socialMedia">
        <LinkedInIcon
          onClick={() => {
            navigate(
              "//https://www.linkedin.com/in/sanghun-michael-yun-ab436b168/"
            );
          }}
        />
        <FacebookIcon
          onClick={() => {
            navigate("//https://www.facebook.com/sanghun.yun.9279");
          }}
        />
        <GitHubIcon
          onClick={() => {
            navigate("//https://github.com/tkdgns0630");
          }}
        />
      </div>
      <p> &copy; 2023 https://github.com/tkdgns0630 </p>
    </div>
  );
}

export default Footer;
