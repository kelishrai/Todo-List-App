import { CiCircleCheck } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { GoClock } from "react-icons/go";

import Tasks from "./Tasks";

import "./TodoList.modules.css";

const TodoList = () => {
  const todayDate = () => {
    const todayDate = new Date().getDate();
    const todayMonth = new Date().getMonth() + 1;
    const todayYear = new Date().getFullYear();
    return `${todayDate}/${todayMonth}/${todayYear}`;
  };
  return (
    <div className="todo--container">
      <div className="todo--header">
        <CiCircleCheck className="todo--header-icon" />
        <h1>Premium Todo</h1>
      </div>
      <p className="todo--description mt">Organize your tasks efficiently</p>
      <Tasks />
      <hr />
      <div className="todo--footer mt">
        <div>
          <CiCalendar />
          <p>Today</p>
        </div>
        <div>
          <GoClock />
          <p>{todayDate()}</p>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
