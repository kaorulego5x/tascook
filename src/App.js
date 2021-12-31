import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Views/Components/Header/Header";
import { Donut } from "./Views/Components/Donut/Donut";
import { Project } from "./Views/Components/Project/Project";

function App() {
  return (
    <div className="App">
      <Header />
      <Project
        taskName={"Tascook"}
        completedTask={8}
        taskSum={12}
      />
    </div>
  );
}

export default App;
