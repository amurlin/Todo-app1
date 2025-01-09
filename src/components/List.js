import React from 'react'
import { Button } from './Button'

export const List = (props) => {
    const {todo, setTodo, filterState} = props;

      // checkbox darsan uyd task "DONE" statustai blno
    const handleCkeckBox = (id) => {
        const newTodos = todo.map((todo) => {
          if (todo.id === id) {
            return { ...todo, status: "DONE" }; //? "ACTIVE" : "DONE"
          } else {
            return todo;
          }
        });
        setTodo(newTodos);
      };

      // taskaa ustgah
    const deleteTask = (task) => {    
        const newTodos = todo.filter((todo) => todo.id !== task.id);
        setTodo(newTodos);
      };
      
  return (
    <div className="list">
            {todo.length === 0 ? (
              <div
                style={{ textAlign: "center", color: "#6B7280", marginTop: "10px", fontSize: "14px"}}
              >
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
                .map((todo, index) => (
                  <div className={`taskBox`} key={index}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <input
                        className="checkBox"
                        type="checkbox"
                        checked={todo.status === "DONE"}
                        onChange={() => handleCkeckBox(todo.id)}
                      />
                      <p className={` ${todo.status === "DONE" ? "done" : ""}`}>
                        {todo.text}
                      </p>
                    </div>
                    <Button
                      className={"deleteButton"}
                      handleEvent={() => deleteTask(todo)}
                      title={"Delete"}
                    />
                  </div>
                ))
            )}
          </div>
  )
}
