import "./Project.css";
import { useState, useEffect, useCallback } from "react";
import { TaskTable } from "./TaskTable/TaskTable";
import { mockTasks } from "../../../Data/MockTasks";
import { mockProjects } from "../../../Data/MockProjects";
import { ChildTasks } from "./ChildTasks/ChildTasks";
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

  return (
    <div className="projects-wrapper">
      {/*<div className="hata-kun"></div>*/}
      <TaskTable
        tasks={tasks}
        selectTask={(taskID) => setSelectedTaskID(taskID)}
        selectedTaskID={selectedTaskID}
      />
      {selectedTaskID && (
        <ChildTasks
          task={tasks.find((task) => task.taskID == selectedTaskID)}
        />
      )}
    </div>
  );
};
