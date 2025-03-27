import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./components/Home/Home";
import TodoList from "./components/TodoList/TodoList";
import Compete from "./components/Compete/Compete";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/compete" element={<Compete />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
