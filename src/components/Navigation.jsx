import "./Navigation.css";
import { Link, useLocation } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import { useState, useEffect } from "react";

function Navigation() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          {" "}
          <ReorderIcon />{" "}
        </button>
      </div>
      <div className="links">
        <Link to="/React-Portfolio/"> Home</Link>
        <Link to="/React-Portfolio/projects"> Projects</Link>
        <Link to="/React-Portfolio/experience">Experience</Link>
        <Link to="/React-Portfolio/contact">Contact</Link>
        <Link to="/React-Portfolio/resume">Resume</Link>
      </div>
    </div>
  );
}

export default Navigation;
