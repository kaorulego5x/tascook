import "./ChildTaskRow.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

export const ChildTaskRow = (props) => {  
  return (
    <>
      {Object.keys(props.childTasks).map((childTask, index) =>
        <div className={props.select[index] ? "child-task-select" : "child-task"} key={childTask} onClick={() => props.setSelectedChildTask(index)}>
          <div className="check-name-wrapper">
            {props.childTasks[childTask].done ? <div className="check-box-done"><FontAwesomeIcon icon={faCheck} className="check-icon"/></div> : <div className="check-box"></div>}
            <div className="child-task-name">{childTask}</div>
            {props.select[index] && <FontAwesomeIcon icon={faTimes} className="times-icon"/>}
          </div>
          {props.select[index] && <div className="child-task-detail">{props.childTasks[childTask].detail}</div>}
        </div>
      )}
      <div className="add-task">
        <div className="add-task-wrapper">
          <div className="add-box"><FontAwesomeIcon icon={faPlus} className="add-icon"/></div>
          <input className="add-task-input" placeholder="Add a task"></input>
        </div>
      </div>
    </>
  );
};