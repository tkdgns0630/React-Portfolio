import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <LinkedInIcon />
        <FacebookIcon />
        <GitHubIcon />
      </div>
      <p> &copy; 2023 https://github.com/tkdgns0630 </p>
    </div>
  );
}

export default Footer;
