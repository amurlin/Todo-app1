import "./App.css";
import React, { useState } from "react";
import { TodoInput } from "./components/TodoInput";
import { Status } from "./components/Status";
import { List } from "./components/List";
import { Footer } from "./components/Footer";

function App() {
  const [todo, setTodo] = useState([]);
  const [error, setError] = useState("");
  const [filterState, setFilterState] = useState("ALL");

  return (
    <div className="App">
      <h3>To-Do List</h3>
      <TodoInput
        setError={setError}
        setTodo={setTodo}
        todo={todo}
        error={error}
      />
      <Status setFilterState={setFilterState} filterState={filterState} />
      <List todo={todo} setTodo={setTodo} filterState={filterState} />
      <Footer todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
