import "./TaskRow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faCopy} from "@fortawesome/free-regular-svg-icons";
import { faEllipsisV, faSlidersH } from "@fortawesome/free-solid-svg-icons";

const Task = ({taskName, calorie, completedTask, taskSum, due, icon, select, handleChange}) => {

	return (
		<div className={select ? "task selected" : "task"} onClick={handleChange}>
			<div className="left">
				<div className={completedTask/taskSum-1 ? "circle-border" : "circle-border-done"}>
					<div className={completedTask/taskSum-1 ? "circle" : "circle-done"}></div>
				</div>
				<div className={completedTask/taskSum-1 ? "taskName" : "taskName-done"}>{taskName}</div>
			</div>
			<div className="right">
				<div className={completedTask/taskSum-1 ? "calorie" : "calorie-done"}>{calorie}</div>
				<div className="task-wrapper">
					<FontAwesomeIcon icon={faCopy} className="task-icon"/>
					<div className="percentage">{Math.floor(completedTask / taskSum * 100)}%</div>
				</div>
				<FontAwesomeIcon icon={faCalendarAlt} className="date-icon"/>
				<div className="date">{due}</div>
				<img src={icon} alt="" className="manager-icon"/>
				<FontAwesomeIcon icon={faEllipsisV} className="kebab-icon"/>
			</div>
		</div>
	);
}

export const TaskRow = ({doc, index, handleChange, selectedTask}) => {
    return (
        (index === 0) ? 
            <Task
                key={doc.taskID.toString()}
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
        :
            <div key={doc.taskID.toString()}>
                <div className="line"></div>
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