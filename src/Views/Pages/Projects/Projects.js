import "./Project.css";
import { useState, useEffect, useCallback } from "react";
import { TaskTable } from "./TaskTable/TaskTable";
import { mockTasks } from "../../../Data/MockTasks";
import { mockProjects } from "../../../Data/MockProjects";
import { ChildTasks } from "./ChildTasks/ChildTasks";
import { DonutChart } from "../../Components/DonutChart/DonutChart";
import { Bar } from "../../Components/Bar/Bar";
import { Link } from "react-router-dom";

export const Projects = (props) => {
  const [projects, setProjects] = useState(mockProjects);
  const [taskIDs, setTaskIDs] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [selectedProject, setSelectedProject] = useState("tascook");
  const [selectedTaskID, setSelectedTaskID] = useState();

  useEffect(() => {
    const project = projects.find((project) => project.name == selectedProject);
    setTaskIDs(project.taskIDs);
  }, [projects]);

  useEffect(() => {
    const tempTasks = [];
    taskIDs.map((taskID) => {
      tempTasks.push(mockTasks.find((task) => task.taskID == taskID));
    });
    console.log(tempTasks);
    setTasks(tempTasks);
  }, [taskIDs]);

  const completeChildTask = (childTaskInd) => {
    let prevTasks = tasks.slice();
    let taskInd = prevTasks.findIndex((task) => task.taskID == selectedTaskID);
    prevTasks[taskInd].childTasks[childTaskInd].complete = !prevTasks[taskInd]
      .childTasks[childTaskInd].complete;
    setTasks(prevTasks);
  };

  useEffect(() => {
    console.log("tasks is change");
  }, [tasks]);

  const addTask = (newTaskName, newTaskCalorie) => {
    let prevTasks = tasks.slice();
    prevTasks.push({
      taskID: newTaskName + newTaskCalorie,
      taskName: newTaskName,
      calorie: newTaskCalorie,
      due: "9/23",
      childTasks: [],
    });
    setTasks(prevTasks);
  };

  const addChildTask = (newTaskVal) => {
    let prevTasks = tasks.slice();
    let taskInd = prevTasks.findIndex((task) => task.taskID == selectedTaskID);
    prevTasks[taskInd].childTasks.push({
      taskName: newTaskVal,
      complete: false,
    });
    setTasks(prevTasks);
  };

  return (
    <div className="projects-wrapper">
      <div className="info">
        <div className="project-header">
          <div className="project-name">Tascook</div>
          <div className="project-week">1/1~1/7</div>
        </div>
        <div className="projects-chart-wrapper">
          <Bar />
          <DonutChart completedTask={70} taskSum={135} />
          <DonutChart completedTask={4} taskSum={5} color={"brown"} />
        </div>
        <div className="task-table-wrapper">
          <TaskTable
            tasks={tasks}
            selectTask={(taskID) => setSelectedTaskID(taskID)}
            selectedTaskID={selectedTaskID}
            addTask={addTask}
          />
        </div>
      </div>
      {selectedTaskID ? (
        <ChildTasks
          task={tasks.find((task) => task.taskID == selectedTaskID)}
          completeChildTask={completeChildTask}
          addChildTask={addChildTask}
        />
      ) : (
        <div className="space-holder"></div>
      )}
    </div>
  );
};
