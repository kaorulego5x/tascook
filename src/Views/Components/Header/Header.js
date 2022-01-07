import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faChartPie,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = (props) => {
  return (
    <div className="header-outer-wrapper fluid-container">
      <div className="header-left-wrapper">
        <Link to="/" className="link">
          <p className="title">Tascook</p>
        </Link>
        {/*
          <Link to="/">
          <Button
            onClick={() => {
              props.setTab("all");
            }}
            className={
              props.tab == "all"
                ? "selected-tab-button"
                : "unselected-tab-button"
            }
          >
            <FontAwesomeIcon icon={faChartPie} />
            <p className="btn-label">all</p>
          </Button>
        </Link>
        <Link to="projects">
          <Button
            onClick={() => {
              props.setTab("projects");
            }}
            className={
              props.tab == "projects"
                ? "selected-tab-button"
                : "unselected-tab-button"
            }
          >
            <FontAwesomeIcon icon={faList} />
            <p className="btn-label">projects</p>
          </Button>
        </Link>*/}
      </div>
      <Button
        className="essential-btn"
        onClick={() => {
          console.log("signed out!");
        }}
      >
        <FontAwesomeIcon icon={faSignOutAlt} />
        <p className="btn-label">Sign out</p>
      </Button>
    </div>
  );
};
