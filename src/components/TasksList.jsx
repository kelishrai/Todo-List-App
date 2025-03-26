import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";

const Task = ({ task }) => {
    return (
        <li className="task">
            <div>
                <input type="checkbox" />
                {task}
            </div>
            <RiDeleteBinLine />
        </li>
    );
};

const TasksList = ({ tasks, status }) => {
    return (
        <ul className="tasks mt">
            {tasks.map((task) => (
                <Task task={task} />
            ))}
        </ul>
    );
};

export default TasksList;
