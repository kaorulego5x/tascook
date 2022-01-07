import "./TaskTable.css";
import { TaskRow } from "./TaskRow/TaskRow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

export const TaskTable = ({ tasks, selectTask, selectedTaskID }) => {
  const [toCook, setToCook] = useState(0);

  useEffect(() => {
    let tempCook = 0;
    tasks.map((task) => {
      const cookedChildTask = task.childTasks.filter((childTask) => {
        return childTask.complete;
      }).length;
      const childTaskSum = task.childTasks.length;
      if (cookedChildTask !== childTaskSum) tempCook += 1;
    });
    setToCook(tempCook);
  }, [tasks]);

  return (
    <>
      <div className="task-table">
        <div className="table-title-wrapper">
          <div className="title">
            <h2>Tasks</h2>
            <h2>{toCook}</h2>
            <p>to cook</p>
          </div>
          <FontAwesomeIcon icon={faSlidersH} className="slider-icon" />
        </div>
        {tasks.map((task, index) => (
          <TaskRow
            taskID={task.taskID}
            taskName={task.taskName}
            calorie={task.calorie}
            due={task.due}
            childTasks={task.childTasks}
            selectTask={selectTask}
            selectedTaskID={selectedTaskID}
          />
        ))}
      </div>
    </>
  );
};
