import "./TaskRow.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faCopy } from "@fortawesome/free-regular-svg-icons";
import { faEllipsisV, faSlidersH } from "@fortawesome/free-solid-svg-icons";

export const TaskRow = ({
  taskID,
  taskName,
  calorie,
  due,
  childTasks,
  selectTask,
  selectedTaskID,
}) => {
  const cookedChildTask = childTasks.filter((childTask) => {
    return childTask.complete;
  }).length;
  const childTaskSum = childTasks.length;
  const cooked = childTaskSum != 0 && cookedChildTask == childTaskSum;

  return (
    <div
      className={selectedTaskID === taskID ? "selected" : "task"}
      onClick={() => selectTask(taskID)}
    >
      <div className="taskrow-left">
        <div className={cooked ? "circle-border-done" : "circle-border"}>
          <div className={cooked ? "circle-done" : "circle"}></div>
        </div>
        <div className={cooked ? "taskName-done" : "taskName"}>{taskName}</div>
      </div>
      <div className="taskrow-right">
        <div className={"calorie" + " " + `${cooked && "calorie-done"}`}>
          <p className="calorie-text">{calorie}</p>
        </div>
        <div className="cooked-percentage-wrapper">
          <FontAwesomeIcon icon={faCopy} className="task-icon" />
          <p className="cooked-percentage-text">
            {childTaskSum != 0
              ? Math.floor((cookedChildTask / childTaskSum) * 100)
              : 0}
            %
          </p>
        </div>
        <div className="date-wrapper">
          <FontAwesomeIcon icon={faCalendarAlt} className="date-icon" />
          <div className="due-text">{due}</div>
        </div>
        <FontAwesomeIcon icon={faEllipsisV} className="kebab-icon" />
      </div>
    </div>
  );
};

/* export const TaskRow = ({ doc, index, handleChange, selectedTask }) => {
  return (
    <div key={doc.taskID.toString()}>
      {index !== 0 && <div className="line"></div>}
      <Task
        taskName={doc.taskName}
        calorie={doc.calorie}
        completedTask={doc.completedTask}
        taskSum={doc.taskSum}
        due={doc.due} //date型です。
        icon={doc.icon}
        done={doc.done}
        select={selectedTask[index]}
        handleChange={() => handleChange(index)}
      />
    </div>
  );
};
 */
