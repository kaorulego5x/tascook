import "./Project.css";
import { Donut } from "../Donut/Donut";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export const Project = (props) => {

  return (
    <>
        <div className="project">
            <Donut calorie={60} />
            <div className="projectName">
                {props.taskName}
            </div>
            <div className="completedTask">
                <p>Completed Task</p>
                <span>{props.completedTask}/{props.taskSum}</span>
            </div>
            <button className="detailButton"><div></div><div>detail</div><FontAwesomeIcon icon={faAngleRight} className="rightArrow" /></button>
            
        </div>
    </>
  );
};