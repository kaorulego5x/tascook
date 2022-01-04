import "./App.css";
import { useState } from "react";
import { Header } from "./Views/Components/Header/Header";
import { All } from "./Views/Pages/All/All";
import { Projects } from "./Views/Pages/Projects/Projects";

const App = () => {
  const [tab, setTab] = useState("all");

  return (
    <div className="App">
      <Header tab={tab} setTab={setTab} />
      {tab == "all" ? <All /> : <Projects />}
    </div>
  );
};

export default App;
