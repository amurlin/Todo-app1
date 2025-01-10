import React from 'react';
import { Button } from './Button';

export const List = (props) => {
    const {todos, setTodos, filterState} = props;

    //const [logs, setLogs] = useState([]);

      // checkbox darsan uyd task "DONE" statustai blno
    const handleCkeckBox = (id) => {
        const newTodos = todos.map((todos) => {
          if (todos.id === id) {
            return { ...todos, status: "DONE" }; //? "ACTIVE" : "DONE"
          } else {
            return todos;
          }
        });
        setTodos(newTodos);

        // const updatedLogs = logs.map((log) => {
        //   if (log.id === todos.id) {
        //     return {
        //       ...log, 
        //       logs:[...log, logs, {status: "ALL", timeline: new Date() }],
        //     };
        //   } else {
        //     return log;
        //   }
        // });
        // setLogs(updatedLogs)
      };

      // taskaa ustgah
    const deleteTask = (task) => {    
        const newTodos = todos.filter((todo) => todo.id !== task.id);
        setTodos(newTodos);
      };
      
  return (
    <div className="list">
            {todos.length === 0 ? (
              <div
                style={{ textAlign: "center", color: "#6B7280", marginTop: "10px", fontSize: "14px"}}
              >
                No tasks yet. Add one above!
              </div>
            ) : (
              todos
                .filter((todos) => {
                  if (filterState === "ALL") {
                    return true;
                  } else {
                    return todos.status === filterState;
                  }
                })
                .map((todos, index) => (
                  <div className={`taskBox`} key={index}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <input
                        className="checkBox"
                        type="checkbox"
                        checked={todos.status === "DONE"}
                        onChange={() => handleCkeckBox(todos.id)}
                      />
                      <p className={` ${todos.status === "DONE" ? "done" : ""}`}>
                        {todos.text}
                      </p>
                    </div>
                    <Button
                      className={"deleteButton"}
                      handleEvent={() => deleteTask(todos)}
                      title={"Delete"}
                    />
                  </div>
                ))
            )}
          </div>
  )
}
