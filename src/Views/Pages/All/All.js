import { ProjectStatBox } from "./ProjectStatBox/ProjectStatBox";
import "./All.css";
import { Form } from "react-bootstrap";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export const All = (props) => {
  const [pjName, setPjName] = useState("");

  return (
    <div class="fluid-container">
      <div class="projects-wrapper">
        <div class="title-wrapper">
          <h1 className="organization-name">GDSC Cloud League</h1>
          <div class="pj-searchbar-wrapper">
            <FontAwesomeIcon icon={faSearch} className="pj-searchbar-icon" />
            <input
              className="pj-searchbar"
              value={pjName}
              onChange={(e) => {
                setPjName(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="projects-row">
          <ProjectStatBox taskName={"Tascook"} completedTask={8} taskSum={12} />
          <ProjectStatBox
            taskName={"Sandlot"}
            completedTask={10}
            taskSum={30}
          />
          <ProjectStatBox taskName={"Arcade"} completedTask={8} taskSum={12} />
          <ProjectStatBox taskName={"Tascook"} completedTask={8} taskSum={12} />
        </div>
      </div>
    </div>
  );
};
