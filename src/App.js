import "./App.css";
import React, { useState } from "react";
import { TodoInput } from "./components/TodoInput";
import { Status } from "./components/Status";
import { List } from "./components/List";
import { Footer } from "./components/Footer";

function App() {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState("");
  const [filterState, setFilterState] = useState("ALL");

  return (
    <div className="App">
      <h3>To-Do List</h3>
      <TodoInput
        setError={setError}
        setTodos={setTodos}
        todos={todos}
        error={error}
      />
      <Status setFilterState={setFilterState} filterState={filterState} />
      <List todos={todos} setTodos={setTodos} filterState={filterState} />
      <Footer todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
