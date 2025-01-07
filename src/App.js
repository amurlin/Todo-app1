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
     <h3>To-Do List</h3>
     <div className='addTask'>
      <input 
      placeholder='Add a new task...' 
      value={newTask} 
      onChange={handleTaskChange} 
      />
      {error.length > 1 && <div>{error}</div>}
      <button className='addButton' onClick={addTask}>Add</button>
     </div>
     <div className='status'>
      <button className={`statusButton ${filterState == "ALL"? "active": ""}`} onClick={() => handleFilterState("ALL")}>all</button>
      <button className={`statusButton ${filterState == "ACTIVE"? "active": ""}`} onClick={() => handleFilterState("ACTIVE")}>active</button>
      <button className={`statusButton ${filterState == "DONE"? "active": ""}`} onClick={() => handleFilterState("DONE")}>completed</button>
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
        <div className='taskBox' key={todo.id}>
          <div style={{display: 'flex', alignItems: 'center'}}>
          <input className='checkBox' type='checkbox'  onChange={() => handleCkeckBox(todo.id)}/>
          {todo.text}
          </div>
          <button className='deleteButton' onClick={() => deleteTask(todo)}>Delete</button>
        </div>
     ))}
     </div>
    </div>
  );
}

export default App;
