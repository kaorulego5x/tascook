import "./ChildTaskRow.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

export const ChildTaskRow = ({ childTask, childTaskInd }) => {
  return (
    <div className="child-task" key={childTaskInd}>
      <div className="check-name-wrapper">
        {childTask.complete ? (
          <div className="check-box-done">
            <FontAwesomeIcon icon={faCheck} className="check-icon" />
          </div>
        ) : (
          <div className="check-box"></div>
        )}
        <div className="child-task-name">{childTask.taskName}</div>
      </div>
    </div>
  );
};
