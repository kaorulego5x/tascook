import { ProjectStatBox } from "./ProjectStatBox/ProjectStatBox";
import "./All.css";
import { Form } from "react-bootstrap";
import { useState, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import db from "../../../Firebase";
import { doc, setDoc } from "firebase/firestore";
import { mockProjects } from "../../../Data/MockProjects";

export const All = (props) => {
  const [pjName, setPjName] = useState("");
  const [projects, setProjects] = useState(mockProjects);

  /* useEffect(async () => {
    const projectID = getUniqueStr();
    await setDoc(doc(db, "Projects", projectID), {
      name: "sample",
      id: projectID,
      taskIDs: [],
      calorieSum: 100,
      intakeCalorie: 70,
      taskSum: 10,
      cookedTasks: 7,
    });
  }, []); */

  const getUniqueStr = (myStrong) => {
    var strong = 1000;
    if (myStrong) strong = myStrong;
    return (
      new Date().getTime().toString(16) +
      Math.floor(strong * Math.random()).toString(16)
    );
  };

  return (
    <div className="fluid-container">
      <div className="project-wrapper">
        <div className="title-wrapper">
          <h1 className="organization-name">GDSC Cloud League</h1>
          <div className="pj-searchbar-wrapper">
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
          {projects.map((project) => (
            <ProjectStatBox
              key={project.projectID}
              taskName={project.name}
              completedTask={project.cookedTask}
              taskSum={project.taskSum}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
