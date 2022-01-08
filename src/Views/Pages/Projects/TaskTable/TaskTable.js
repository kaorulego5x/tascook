import "./TaskTable.css";
import { TaskRow } from "./TaskRow/TaskRow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

export const TaskTable = ({ tasks, selectTask, selectedTaskID, addTask }) => {
  const [toCook, setToCook] = useState(0);
  const [newTaskName, setNewTaskName] = useState("");
  const [newTaskCalorie, setNewTaskCalorie] = useState(1);

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
        <div className="task-table-title-wrapper">
          <div className="title">
            <h2>Tasks</h2>
            <h2>{toCook}</h2>
            <p>to cook</p>
          </div>
          <FontAwesomeIcon icon={faSlidersH} className="sort-btn" />
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

        <div className="add-task-wrapper">
          <div className="horizontal-flex">
            <div className="add-task-circle">
              <FontAwesomeIcon icon={faPlus} className="add-task-icon" />
            </div>
            <input
              className="add-task-input"
              placeholder="Add a task"
              value={newTaskName}
              onChange={(e) => {
                setNewTaskName(e.target.value);
              }}
              onKeyPress={(e) => {
                if (e.key == "Enter") {
                  e.preventDefault();
                  if (newTaskName == "") return;
                  addTask(newTaskName, newTaskCalorie);
                  setNewTaskName("");
                }
              }}
            />
          </div>
          <div className="horizontal-flex">
            <p className="add-task-label">Select calorie:</p>
            <select
              aria-label="choose calorie"
              className="calorie-selector"
              value={newTaskCalorie}
              onChange={(e) => setNewTaskCalorie(e.target.value)}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={5}>5</option>
              <option value={8}>8</option>
              <option value={13}>13</option>
              <option value={21}>21</option>
              <option value={34}>34</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};
