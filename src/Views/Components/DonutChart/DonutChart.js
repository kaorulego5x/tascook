import "./DonutChart.css";
import { Donut } from "../Donut/Donut";

export const DonutChart = (props) => {
  return (
    <div className="donut-chart">
      <div className="donut">
        <Donut
          calorie={Math.floor((props.completedTask / props.taskSum) * 100)}
          scale={8}
          color={props.color}
        />
      </div>
      <div className="content-title">{props.color ? "Cooked" : "Calorie"}</div>
      <div className="content">
        {props.completedTask}/{props.taskSum}
      </div>
    </div>
  );
};
