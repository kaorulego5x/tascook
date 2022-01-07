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

  let pieStyleB = {
    background: `radial-gradient(#fff 40%, transparent 41%), conic-gradient(#9A4A00 0% ${props.calorie}%, #F4F4F4 ${props.calorie}% 100%)`,
  };
  let pieEndStyleB = {
    transform: `rotate(${(360 * props.calorie) / 100}deg) translateY(-55.1px)`,
    background: "#9A4A00",
  };

  return (
    <>
      <Pie calorie={props.calorie * pieRatio}>
        <PieEnd calorie={props.calorie * pieRatio} />
        <div className="pie-content">
          {props.calorie}
          <span>%</span>
        </div>
      </Pie>
    </>
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
  font-size: 20px;
  color: #341900;
  transition: background 0.2s;
  background: radial-gradient(#fff 40%, transparent 41%),
    conic-gradient(
      #ff7c03 0% ${(props) => props.calorie}%,
      #f4f4f4 ${(props) => props.calorie}% 100%
    );
  &::after {
    content: "";
    position: absolute;
    width: 29.2px;
    height: 29.2px;
    border-radius: 50%;
    background: #ff7c03;
    transform: translateY(-55.1px);
  }
`;

const PieEnd = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #ff7c03;
  transform: rotate(${(props) => (360 * props.calorie) / 100}deg)
    translateY(-55.1px);
`;
