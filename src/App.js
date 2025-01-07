import './App.css';
import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid';

function App() {
  const [todo, setTodo] = useState([]);
  const [error, setError] = useState("");
  const [newTask, setNewTask] = useState("");
  const [filterState, setFilterState] = useState("ALL");

  // inputiin utgiig shinechleh
  const handleTaskChange = (event) => {
    setNewTask(event.target.value);
  };
  
  // shine task nemeh
  const addTask = () => {
    if (newTask.length === 0) {
      setError("* Please enter a task."); 
    } else { // tshine taskaa todo ruu nemne
    setTodo([...todo, {text: newTask, id: uuidv4(), status: "ACTIVE"}]);  // '...todo' ni huuchin baisan bud todo-g n hadgaldag
    setNewTask("");
    setError("");
    }
  };

  // checkbox darsan uyd task "DONE" statustai blno
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

  // statusaa filter hiine
  const handleFilterState = (state) => {
    setFilterState(state);
  };

  // taskaa ustgah
  const deleteTask = (task) => {
    const newTodos = todo.filter((todo) => todo.id !== task.id);
    setTodo(newTodos);
  };  

  return (
    <div className="App">
     <h3>To-Do List</h3>
     <div className='addTask'>
        <div style={{display: 'flex', flexDirection: 'column', gap: '6px'}}>
          <input 
          placeholder='Add a new task...' 
          value={newTask} 
          onChange={handleTaskChange} 
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              addTask(); // Enter darval 'addTask' functionaa duuddna
            }
          }}
          style={{
            borderColor: error ? "#EF4444" : "rgba(0, 0, 0, 0.075)",
            borderWidth: "1px",
            borderStyle: "solid",
          }}
          />
          {error.length > 1 && <div style={{color: '#EF4444', fontSize: '15px'}}>{error}</div>} 
        </div>
        <button className='addButton' onClick={addTask}>Add</button>
     </div>
     <div className='status'>
        <button className={`statusButton ${filterState === "ALL"? "active": ""}`} onClick={() => handleFilterState("ALL")}>All</button>
        <button className={`statusButton ${filterState === "ACTIVE"? "active": ""}`} onClick={() => handleFilterState("ACTIVE")}>Active</button>
        <button className={`statusButton ${filterState === "DONE"? "active": ""}`} onClick={() => handleFilterState("DONE")}>Completed</button>
     </div>
     <div className='list'>
        {todo.length === 0 ? (
    <div style={{ textAlign: "center", color: "#6B7280", marginTop: "20px" }}>
      No tasks yet. Add one above!
    </div>
        ) : (
        todo
        .filter((todo) => {
          if (filterState === "ALL") {
            return true;
          } else {
            return todo.status === filterState;
          }
        })
        .map((todo) => (
          <div className={`taskBox ${todo.status === "DONE" ? "done" : ""}`} key={todo.id}>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <input 
              className='checkBox' 
              type='checkbox'  
              onChange={() => handleCkeckBox(todo.id)}/>
              {todo.text}
            </div>
            <button 
            className='deleteButton' 
            onClick={() => deleteTask(todo)}>
              Delete
            </button>
          </div>
        ))
      )}
     </div>
     <div className="PoweredByPinecone">
      <p className='text'>Powered by</p>
      <a href='https://pinecone.mn/' style={{textDecoration: 'none', cursor: 'pointer', color: '#3C82F6'}}>Pinecone Academy</a>
     </div>
    </div>
  );
}

export default App;
