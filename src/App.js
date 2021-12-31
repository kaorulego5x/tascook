import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Views/Components/Header/Header";
import { Donut } from "./Views/Components/Donut/Donut";

function App() {
  return (
    <div className="App">
      <Header />
      <Donut calorie={90} />
    </div>
  );
}

export default App;
