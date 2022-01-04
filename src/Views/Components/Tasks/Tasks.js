import "./Tasks.css";
import { TaskRow } from "./TaskRow/TaskRow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";

export const Tasks = (props) => {
  return (
    <>
      <div className="tasks">
        <div className="title-wrapper">
          <div className="title">
            <h2>Tasks</h2>
            <h2>8</h2>
            <p>to cook</p>
          </div>
          <FontAwesomeIcon icon={faSlidersH} className="slider-icon" />
        </div>
        {props.collection.map((doc, index) => (
          <TaskRow
            doc={doc}
            index={index}
            handleChange={props.handleChange}
            selectedTask={props.selectedTask}
          />
        ))}
      </div>
    </>
  );
};
