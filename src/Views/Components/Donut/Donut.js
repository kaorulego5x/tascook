import "./Donut.css";

export const Donut = (props) => {
  let pieStyle = {
    background : `radial-gradient(#fff 40%, transparent 41%), conic-gradient(#FF7C03 0% ${props.calorie}%, #F4F4F4 ${props.calorie}% 100%)`
  }
  let pieEndStyle = {
    transform : `rotate(${360 * props.calorie / 100}deg) translateY(-39.3px)`
  }

  return (
    <>
      <div className="pie" style={pieStyle}>
        <div className="pieEnd" style={pieEndStyle}></div>
        <div className="pieContent">
          {props.calorie}<span>%</span>
        </div>
      </div>
    </>
  );
};
