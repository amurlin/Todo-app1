import './App.css';
import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid';

function App() {
  const [todo, setTodo] = useState([]);
  const [error, setError] = useState("");
  const [newTask, setNewTask] = useState("");
  const [filterState, setFilterState] = useState("ALL");

  const handleTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask.length === 0) {
      setError("please enter todo task");
    } else {
    setTodo([...todo, {text: newTask, id: uuidv4(), status: "ACTIVE"}]);
    setNewTask("");
    setError("");
    }
  };

  const handleCkeckBox = (id) => {
    const newTodos = todo.map((todo) => {
      if (todo.id === id) {
        return {...todo, status: "DONE"};
      } else {
        return todo;
      }
    });
    setTodo(newTodos);
  };

  const handleFilterState = (state) => {
    setFilterState(state);
  };

  const deleteTask = (taskName) => {
    setTodo()
  };

  console.log(todo);
  

  return (
    <div className="App">
     <div className='addTask'>
      <input 
      placeholder='Add to do' 
      value={newTask} 
      onChange={handleTaskChange} 
      />
      {error.length > 1 && <div>{error}</div>}
      <button onClick={addTask}>Add Task</button>
     </div>
     <div>
      <div onClick={() => handleFilterState("ALL")} style={{color: filterState === "ALL" ? "red" : "green"}}>all</div>
      <div onClick={() => handleFilterState("ACTIVE")}>active</div>
      <div onClick={() => handleFilterState("DONE")}>completed</div>
     </div>
     <div className='list'>
     {todo
     .filter((todo) => {
      if (filterState === "ALL") {
        return true;
      } else {
        return todo.status === filterState;
      }
     })
     .map((todo) => (
        <div key={todo.id}>
          <input type='checkbox'  onChange={() => handleCkeckBox(todo.id)}/>
          {todo.text}
          <button onClick={() => deleteTask(todo)}>delete</button>
        </div>
     ))}
     </div>
    </div>
  );
}

export default App;
