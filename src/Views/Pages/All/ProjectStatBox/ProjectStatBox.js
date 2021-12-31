import "./ProjectStatBox.css";
import { Donut } from "../../../Components/Donut/Donut";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

export const ProjectStatBox = (props) => {
  return (
    <div className="project-stat-box">
      <div className="donut-container">
        <Donut
          calorie={Math.floor((props.completedTask / props.taskSum) * 100)}
        />
      </div>
      <p className="project-name">{props.taskName}</p>
      <div className="completed-task-wrapper">
        <p>Completed Task</p>
        <span>
          {props.completedTask}/{props.taskSum}
        </span>
      </div>
      <Button className="detail-button">
        <p>detail</p>
        <FontAwesomeIcon icon={faAngleRight} className="right-arrow" />
      </Button>
    </div>
  );
};
