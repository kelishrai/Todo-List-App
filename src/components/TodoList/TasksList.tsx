import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";

const Task = ({ task, handleActiveClick, handleCompletedClick }) => {
  const { todoId, description, active, completed } = task;

  return (
    <li className="task">
      <div>
        <input
          type="checkbox"
          checked={active}
          onChange={() => handleActiveClick(todoId)}
        />
        <span className={active ? "crossed" : ""}>{description}</span>
      </div>
      <RiDeleteBinLine onClick={() => handleCompletedClick(todoId)} />
    </li>
  );
};

const TasksList = ({
  tasks,
  status,
  handleActiveClick,
  handleCompletedClick,
}) => {
  const selectedTab = () => {
    switch (status) {
      case "All":
        return tasks.map(
          (task) =>
            task.completed == false && (
              <Task
                key={task.todoId}
                task={task}
                handleActiveClick={handleActiveClick}
                handleCompletedClick={handleCompletedClick}
              />
            )
        );

      case "Active":
        return tasks.map(
          (task) =>
            task.active == true &&
            task.completed == false && (
              <Task
                key={task.todoId}
                task={task}
                handleActiveClick={handleActiveClick}
                handleCompletedClick={handleCompletedClick}
              />
            )
        );

      case "Completed":
        return tasks.map(
          (task) =>
            task.completed == true && (
              <Task
                key={task.todoId}
                task={task}
                handleActiveClick={handleActiveClick}
                handleCompletedClick={handleCompletedClick}
              />
            )
        );
    }
  };

  return <ul className="tasks">{selectedTab()}</ul>;
};

export default TasksList;
