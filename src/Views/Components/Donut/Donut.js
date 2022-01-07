import "./Donut.css";

export const Donut = (props) => {
  let pieStyleO = {
    background: `radial-gradient(#fff 40%, transparent 41%), conic-gradient(#FF7C03 0% ${props.calorie}%, #F4F4F4 ${props.calorie}% 100%)`,
  };
  let pieEndStyleO = {
    transform: `rotate(${(360 * props.calorie) / 100}deg) translateY(-55.1px)`,
  };

  let pieStyleB = {
    background: `radial-gradient(#fff 40%, transparent 41%), conic-gradient(#9A4A00 0% ${props.calorie}%, #F4F4F4 ${props.calorie}% 100%)`,
  };
  let pieEndStyleB = {
    transform: `rotate(${(360 * props.calorie) / 100}deg) translateY(-55.1px)`,
    background: "#9A4A00",
  };

  return (
    <div className={props.scale && "little"}>
      <div
        className={props.color ? "pieB" : "pieO"}
        style={props.color ? pieStyleB : pieStyleO}
      >
        <div
          className="pie-end"
          style={props.color ? pieEndStyleB : pieEndStyleO}
        ></div>
        <div className="pie-content">
          {props.calorie}
          <span>%</span>
        </div>
      </div>
    </div>
  );
};
