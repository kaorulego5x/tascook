import "./App.css";
import { useState } from "react";
import { Header } from "./Views/Components/Header/Header";
import { All } from "./Views/Pages/All/All";
import { Projects } from "./Views/Pages/Projects/Projects";
import { mockProjects } from "./Data/MockProjects";
import { Routes, Route, Link } from "react-router-dom";

const App = () => {
  const [tab, setTab] = useState("all");

  return (
    <div className="App">
      <Header tab={tab} setTab={setTab} />
      <Routes>
        <Route path="/" element={<All />} />
        <Route path=":projectID" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default App;
