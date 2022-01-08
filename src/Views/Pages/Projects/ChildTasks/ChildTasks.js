import "./ChildTasks.css";
import { useState } from "react";
import { ChildTaskRow } from "./ChildTaskRow/ChildTaskRow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt, faCopy } from "@fortawesome/free-regular-svg-icons";

export const ChildTasks = ({ task, completeChildTask, addChildTask }) => {
  const [newTaskVal, setNewTaskVal] = useState("");
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
          <div className="cooked-wrapper">
            <div className="achieve">
              <FontAwesomeIcon icon={faCopy} className="child-task-icon" />
              <div className="child-percentage">
                {childTaskSum != 0
                  ? Math.floor((cookedChildTask / childTaskSum) * 100)
                  : 0}
                %
              </div>
            </div>
            <div className="fraction">
              ({cookedChildTask}/{childTaskSum})
            </div>
          </div>
          <div className="due-wrapper">
            <FontAwesomeIcon icon={faCalendarAlt} className="child-date-icon" />
            <div className="child-due">{task.due}</div>
          </div>
        </div>

        {childTasks.map((childTask, childTaskInd) => (
          <ChildTaskRow
            childTask={childTask}
            childTaskInd={childTaskInd}
            completeChildTask={completeChildTask}
          />
        ))}

        <div className="add-child-task">
          <div className="add-child-task-wrapper">
            <div className="add-box">
              <FontAwesomeIcon icon={faPlus} className="add-icon" />
            </div>
            <input
              className="add-child-task-input"
              placeholder="Add a task"
              value={newTaskVal}
              onChange={(e) => {
                setNewTaskVal(e.target.value);
              }}
              onKeyPress={(e) => {
                if (e.key == "Enter") {
                  e.preventDefault();
                  if (newTaskVal == "") return;
                  addChildTask(newTaskVal);
                  setNewTaskVal("");
                }
              }}
            ></input>
          </div>
        </div>
      </div>
    </>
  );
};
