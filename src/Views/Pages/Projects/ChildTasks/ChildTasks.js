import "./ChildTasks.css";
import { useState } from "react";
import { ChildTaskRow } from "./ChildTaskRow/ChildTaskRow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt, faCopy } from "@fortawesome/free-regular-svg-icons";

export const ChildTasks = ({ task }) => {
  /* const handleChange = (key) => {
    setSelectedChildTask((prevSelectedChildTask) =>
      prevSelectedChildTask.map((a, b) => {
        return b === key ? true : false;
      })
    );
  }; */

  const childTasks = task.childTasks;
  const cookedChildTask = childTasks.filter((childTask) => {
    return childTask.complete;
  }).length;
  const childTaskSum = childTasks.length;
  const cooked = cookedChildTask == childTaskSum;

  return (
    <>
      <div className="child-tasks">
        <div className="title-wrapper">
          <h1 className="task-name">{task.taskName}</h1>
          <FontAwesomeIcon icon={faEllipsisV} className="kebab" />
        </div>
        <div className="child-tasks-detail">
          <div className="child-tasks-left">
            <FontAwesomeIcon icon={faCopy} className="child-task-icon" />
            <div className="child-percentage">
              {Math.floor((cookedChildTask / childTaskSum) * 100)}%
            </div>
            <div className="fraction">
              ({cookedChildTask}/{childTaskSum})
            </div>
            <FontAwesomeIcon icon={faCalendarAlt} className="child-date-icon" />
            <div className="child-due">{task.due}</div>
          </div>
          <div className="child-tasks-right">
            <div className="manager-name">{task.name}</div>
          </div>
        </div>
        {childTasks.map((childTask, childTaskInd) => (
          <ChildTaskRow childTask={childTask} childTaskInd={childTaskInd} />
        ))}
        <div className="add-task">
          <div className="add-task-wrapper">
            <div className="add-box">
              <FontAwesomeIcon icon={faPlus} className="add-icon" />
            </div>
            <input className="add-task-input" placeholder="Add a task"></input>
          </div>
        </div>
      </div>
    </>
  );
};
