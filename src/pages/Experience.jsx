import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import ConstructionIcon from "@mui/icons-material/Construction";
import ComputerIcon from "@mui/icons-material/Computer";

function Experience() {
  return (
    <div className="experience">
      {" "}
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date=" 2009-2013"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            South Strathfield High School
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="13-2015"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Homebush highSchool
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016-2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            UNSW Commerce Graduate
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020-2022"
          iconStyle={{ background: "Yellow", color: "green" }}
          icon={<MilitaryTechIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            South Korea Compulsory military acquisition.
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022-2023"
          iconStyle={{ background: "blue", color: "white" }}
          icon={<ConstructionIcon />}
        >
          <h3 className="vertical-timeline-element-title">Paving Labourer.</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023-2023"
          iconStyle={{ background: "#3e497a", color: "white" }}
          icon={<ComputerIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Usyd Coding Bootcamp.
          </h3>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
