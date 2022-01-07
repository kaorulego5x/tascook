import "./ProjectStatBox.css";
import { Donut } from "../../../Components/Donut/Donut";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProjectStatBox = (props) => {
  return (
    <div className="project-stat-box">
      <p className="project-name">{props.taskName}</p>
      <div className="donut-container">
        <Donut
          calorie={Math.floor((props.completedTask / props.taskSum) * 100)}
        />
      </div>
      <div className="completed-task-wrapper">
        <p>Completed</p>
        <span>
          {props.completedTask}/{props.taskSum}
        </span>
      </div>

      <Link to={props.projectID} className="link">
        <Button className="detail-btn">
          <p>detail</p>
          <FontAwesomeIcon icon={faAngleRight} className="right-arrow" />
        </Button>
      </Link>
    </div>
  );
};
