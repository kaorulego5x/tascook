import "./Bar.css";
import { useState, useEffect } from "react";

export const Bar = (props) => {
  const taskAchives = [20, 30, 40, 50, 60, 80, 100];
  const dates = ["1/1", "1/2", "1/3", "1/4", "1/5", "1/6", "1/7"];

  let sum = 0;
  const delayTime = taskAchives.forEach((t) => (sum += t));
  const [barRatio, setBarRatio] = useState(0);

  useEffect(() => {
    let tempRatio = 0;
    setInterval(() => {
      if (tempRatio < 1) {
        tempRatio += 0.05;
      }
      setBarRatio(tempRatio);
    }, 15);
  }, []);

  return (
    <div className="graph-outer-wrapper">
      <div className="graph">
        <div className="graph-title">Calorie stats</div>
        <div className="graph-contents">
          <div className="glid-line-wrapper">
            <div className="glid-line"></div>
            <div className="glid-line"></div>
            <div className="glid-line"></div>
            <div className="glid-line"></div>
            <div className="glid-line"></div>
            <div className="glid-line-end"></div>
          </div>
          <div className="bar-wrapper">
            {taskAchives.map((percentage, index) => (
              <div className="contents-wrapper" key={index.toString()}>
                <div
                  className="bar"
                  style={{ height: `${percentage * barRatio}%` }}
                ></div>
                <div className="tail"></div>
                <div className="bar-date">{dates[index]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
