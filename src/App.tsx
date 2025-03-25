import "./App.css";

import { CiCircleCheck } from "react-icons/ci";
import { IoMdAddCircleOutline } from "react-icons/io";

function App() {
    return (
        <>
            <div className="todo-container">
                <div className='header'>
                    <CiCircleCheck className="header-icon"/>
                    <h1>Premium Todo</h1>
                </div>
                <p className="todo-description">Organize your tasks efficiently</p>
                <div className="add-task-section">
                    <input type="text" placeholder="Add a new task..."></input>
                    <IoMdAddCircleOutline className="add-task-button" color="white"/>
                </div>
                <div>
                    <ul>
                        <li>All</li>
                        <li>Active</li>
                        <li>Completed</li>
                    </ul>
                </div>
                <div className="tasks"></div>
                <div className="footer">
                    <div>
                        <p>C</p>
                        <p>Today</p>
                    </div>
                    <div>
                        <p>T</p>
                        <p>3/25/2025</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
