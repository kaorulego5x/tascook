import "./Bar.css";

export const Bar = (props) => {
	const taskAchives = [20, 30, 40, 50, 60, 80, 100];

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
						{taskAchives.map((percentage, index) =>
							<div key={index.toString()} className="bar" style={{height : `${percentage}%`}}></div>
						)}
					</div>
					<div className="tail-wrapper">
						{taskAchives.map((percentage, index) =>
							<div key={index.toString()} className="tail"></div>
						)}
					</div>
					<div className="week">
						<div className="date-wrapper">
							<div className="date">12/28</div>
						</div>
						<div className="date-wrapper">
							<div className="date">12/29</div>
						</div>
						<div className="date-wrapper">
							<div className="date">12/30</div>
						</div>
						<div className="date-wrapper">
							<div className="date">12/31</div>
						</div>
						<div className="date-wrapper">
							<div className="date">1/1</div>
						</div>
						<div className="date-wrapper">
							<div className="date">1/2</div>
						</div>
						<div className="date-wrapper">
							<div className="date">1/3</div>
						</div>
					</div>
				</div>
			</div>
    </>
  );
};