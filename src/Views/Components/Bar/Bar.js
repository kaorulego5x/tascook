import "./Bar.css";

export const Bar = (props) => {
  const taskAchives = [20, 30, 40, 50, 60, 80, 100];
  const dates = ["12/26", "12/27", "12/28", "12/29", "12/30", "12/31", "1/1"];

  return (
    <>
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
                <div className="bar" style={{ height: `${percentage}%` }}></div>
                <div className="tail"></div>
                <div className="bar-date">{dates[index]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
