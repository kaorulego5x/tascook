import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Views/Components/Header/Header";
import { All } from "./Views/Pages/All/All";
import { Project } from "./Views/Pages/Projects/Projects";
import { useState } from "react";

const App = () => {
  const [tab, setTab] = useState("all");

  return (
    <div className="App">
      <Header tab={tab} setTab={setTab} />
      {tab == "all" ? <All /> : <Project />}
    </div>
  );
};

export default App;
