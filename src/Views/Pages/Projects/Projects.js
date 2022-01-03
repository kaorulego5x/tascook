import "./Project.css";
import { useState } from "react";
import { Tasks } from "../../Components/Tasks/Tasks";
import { collection } from "../../../Data/MockTasks";
import { ChildTasks } from "../../Components/ChildTasks/ChildTasks"

export const Projects = (props) => {
  const selects = collection.map((doc) => {
    return doc.select
  });

  const [selectedTask, setSelectedTask] = useState(selects);

  const handleChange = (i) => {
    setSelectedTask(prevSelectedTask =>
      prevSelectedTask.map((a, b) => {
        return b === i ? true : false;
      })
    );
  };

  return (
    <div className="parent">
      <div className="hata-kun"></div> {/*畑君が作ったものが入る*/}
      <Tasks collection={collection} handleChange={(i) => handleChange(i)} selectedTask={selectedTask}/>
      <ChildTasks collection={collection} selectedTask={selectedTask}/>
    </div>
  );
};
