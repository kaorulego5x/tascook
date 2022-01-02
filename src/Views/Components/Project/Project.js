import "./Project.css";
import { Donut } from "../Donut/Donut";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export const Project = (props) => {

  return (
    <>
			<div className="project">
					<div className="donut-wrapper">
							<div className="donut">
									<Donut calorie={props.calorie} />
							</div>
					</div>
					<div className="project-name">
							{props.projectName}
					</div>
					<div className="completed-task">
							<p>Completed Task</p>
							<span>{props.completedTask}/{props.taskSum}</span>
					</div>
					<button className="detail-button"><div></div><div>detail</div><FontAwesomeIcon icon={faAngleRight} className="right-arrow" /></button>
			</div>
    </>
  );
};