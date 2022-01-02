import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { collection } from "./Data/MockTasks";
import { Header } from "./Views/Components/Header/Header";
import { Tasks } from "./Views/Components/Tasks/Tasks";

function App() {

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
    <div className="App">
      <Header />
      <Tasks collection={collection} handleChange={(i) => handleChange(i)} selectedTask={selectedTask}/>
    </div>
  );
}

export default App;