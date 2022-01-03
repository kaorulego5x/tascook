import "./ChildTasks.css"
import { useState } from "react";
import { ChildTaskRow } from "./ChildTaskRow/ChildTaskRow"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt, faCopy } from "@fortawesome/free-regular-svg-icons";

export const ChildTasks = (props) => {
  const data = props.selectedTask.map((select, index) => {
    return select && props.collection[index]
  }).filter(a => a)[0];

  const [selectedChildTask, setSelectedChildTask] = useState(Object.keys(data.childTasks).map(childTask =>
    data.childTasks[childTask].select
  ));

  const handleChange = (key) => {
    setSelectedChildTask(prevSelectedChildTask =>
      prevSelectedChildTask.map((a, b) => {
        return b === key ? true : false;
      })
    )
  }
  return (
    <>
			<div className="child-tasks">
        <div className="title-wrapper">
          <h1 className="task-name">{data.taskName}</h1>
	  			<FontAwesomeIcon icon={faEllipsisV} className="kebab"/>
        </div>
        <div className="child-tasks-detail">
          <div className="child-tasks-left">
            <FontAwesomeIcon icon={faCopy} className="child-task-icon"/>
            <div className="child-percentage">{Math.floor(data.completedTask / data.taskSum * 100)}%</div>
            <div className="fraction">({data.completedTask}/{data.taskSum})</div>
            <FontAwesomeIcon icon={faCalendarAlt} className="child-date-icon"/>
            <div className="child-due">{data.due}</div>
          </div>
          <div className="child-tasks-right">
            <img src={data.icon} alt="" className="child-manager-icon"/>
            <div className="manager-name">{data.name}</div>
          </div>
        </div>
        <ChildTaskRow childTasks={data.childTasks} select={selectedChildTask} setSelectedChildTask={(key) => handleChange(key)}/>
      </div>
    </>
  );
};