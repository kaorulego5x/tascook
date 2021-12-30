import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faList, faChartPie } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import { useState } from "react";

export const Header = (props) => {
  const [tab, setTab] = useState("all");

  return (
    <div className="header-outer-wrapper">
      <div className="header-left-wrapper">
        <p className="title">Tascook</p>
        <Button
          onClick={() => {
            setTab("all");
          }}
          className={tab == "all" ? "selectedTabButton" : "unselectedTabButton"}
        >
          <FontAwesomeIcon icon={faChartPie} />
          <p className="btn-label">all</p>
        </Button>
        <Button
          onClick={() => {
            setTab("projects");
          }}
          className={
            tab == "projects" ? "selectedTabButton" : "unselectedTabButton"
          }
        >
          <FontAwesomeIcon icon={faList} />
          <p className="btn-label">projects</p>
        </Button>
      </div>
      <Button
        className="essential-btn"
        onClick={() => {
          console.log("signed out!");
        }}
      >
        <FontAwesomeIcon icon={faPlus} />
        <p className="btn-label">Sign out</p>
      </Button>
    </div>
  );
};
