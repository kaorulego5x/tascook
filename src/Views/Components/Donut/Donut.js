import "./Donut.css";
import styled from "styled-components";
import { useState, useEffect } from "react";

export const Donut = (props) => {
  const [pieRatio, setPieRatio] = useState(0);

  useEffect(() => {
    let tempRatio = 0;
    setInterval(() => {
      if (tempRatio < 1) {
        tempRatio += 0.04;
      }
      setPieRatio(tempRatio);
    }, 15);
  }, []);

  return (
    <div className={props.scale && "little"}>
      <Pie calorie={props.calorie * pieRatio} color={props.color}>
        <div className="pie-content">
          {props.calorie}
          <span>%</span>
        </div>
      </Pie>
    </div>
  );
};

const Pie = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  font-family: "Nunito";
  font-weight: 900 !important;
  font-size: 25px;
  color: #341900;
  transition: background 0.2s;
  background: radial-gradient(#fff 40%, transparent 41%),
    conic-gradient(
      ${(props) => (props.color ? "#9A4A00" : "#ff7c03")} 0%
        ${(props) => props.calorie}%,
      #f4f4f4 ${(props) => props.calorie}% 100%
    );
  &::before {
    content: "";
    position: absolute;
    width: 29.2px;
    height: 29.2px;
    border-radius: 50%;
    background: ${(props) => (props.color ? "#9A4A00" : "#ff7c03")};
    transform: translateY(-55.1px);
  }
  &::after {
    content: "";
    position: absolute;
    width: 29.2px;
    height: 29.2px;
    border-radius: 50%;
    background: ${(props) => (props.color ? "#9A4A00" : "#ff7c03")};
    transform: rotate(${(props) => (360 * props.calorie) / 100}deg)
      translateY(-55.1px);
  }
`;
