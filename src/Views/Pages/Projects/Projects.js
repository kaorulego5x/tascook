import { useState } from "react";
import { Tasks } from "../../Components/Tasks/Tasks";
import { collection } from "../../../Data/MockTasks";

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
  <Tasks collection={collection} handleChange={(i) => handleChange(i)} selectedTask={selectedTask}/>
  );
};
