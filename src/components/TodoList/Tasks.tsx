import React, { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

import TasksList from "./TasksList";

const Tasks = () => {
  const [id, setId] = useState(1);
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [status, setStatus] = useState("All");

  const handleTaskInputChange = (event) => {
    setTaskInput(event.target.value);
  };

  const handleAddTaskButtonClick = () => {
    setId((prev) => prev + 1);
    setTasks((prev) => [
      ...prev,
      {
        todoId: id,
        description: taskInput,
        active: false,
        completed: false,
      },
    ]);
    setTaskInput("");
  };

  const handleActiveClick = (todoId) => {
    console.log(todoId);
    setTasks((prev) =>
      prev.map((task) =>
        task.todoId == todoId ? { ...task, ...{ active: !task.active } } : task
      )
    );
  };

  const handleCompletedClick = (todoId) => {
    console.log(todoId);
    setTasks((prev) =>
      prev.map((task) =>
        task.todoId == todoId
          ? { ...task, ...{ completed: !task.completed } }
          : task
      )
    );
  };

  const handleStatusClick = (event) => {
    setStatus(event.target.textContent);
    // console.log(status);
  };

  return (
    <>
      <div className="add-task-section mt">
        <input
          type="text"
          placeholder="Add a new task..."
          value={taskInput}
          onChange={handleTaskInputChange}
        ></input>
        <IoMdAddCircleOutline
          className="add-task-button"
          color="white"
          onClick={handleAddTaskButtonClick}
        />
      </div>
      <ul className="todo-status mt" onClick={handleStatusClick}>
        <li className={status == "All" ? "todo-status-selected" : ""}>All</li>
        <li className={status == "Active" ? "todo-status-selected" : ""}>
          Active
        </li>
        <li className={status == "Completed" ? "todo-status-selected" : ""}>
          Completed
        </li>
      </ul>
      <TasksList
        tasks={tasks}
        status={status}
        handleActiveClick={handleActiveClick}
        handleCompletedClick={handleCompletedClick}
      />
    </>
  );
};

export default Tasks;
