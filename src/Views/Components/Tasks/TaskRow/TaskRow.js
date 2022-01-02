import "./TaskRow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faCopy} from "@fortawesome/free-regular-svg-icons";
import { faEllipsisV, faSlidersH } from "@fortawesome/free-solid-svg-icons";

const Task = ({taskName, calorie, completedTask, taskSum, due, icon, select, handleChange}) => {

	return (
		<div className={select ? "selected" : "task"} onClick={handleChange}>
			<div className="left">
				<div className={Math.floor(completedTask/taskSum) ? "circle-border-done" : "circle-border"}>
					<div className={Math.floor(completedTask/taskSum) ? "circle-done" : "circle"}></div>
				</div>
				<div className={Math.floor(completedTask/taskSum) ? "taskName-done" : "taskName"}>{taskName}</div>
			</div>
			<div className="right">
				<div className={Math.floor(completedTask/taskSum) ? "calorie-done" : "calorie"}>{calorie}</div>
				<div className="task-wrapper">
					<FontAwesomeIcon icon={faCopy} className="task-icon"/>
					<div className="percentage">{Math.floor(completedTask / taskSum * 100)}%</div>
				</div>
				<div className="date-wrapper">
					<FontAwesomeIcon icon={faCalendarAlt} className="date-icon"/>
					<div className="date">{due}</div>
				</div>
				<img src={icon} alt="" className="manager-icon"/>
				<FontAwesomeIcon icon={faEllipsisV} className="kebab-icon"/>
			</div>
		</div>
	);
}

export const TaskRow = ({doc, index, handleChange, selectedTask}) => {
    return (
        <div key={doc.taskID.toString()}>
            {(index !== 0) && <div className="line"></div>}
            <Task
                taskName={doc.taskName}
                calorie={doc.calorie}
                completedTask={doc.completedTask}
                taskSum={doc.taskSum}
                due={doc.due} //date型です。
                icon={doc.icon}
                done={doc.done}
                select={selectedTask[index]}
                handleChange={() => handleChange(index)}
            />
        </div>
    );
}