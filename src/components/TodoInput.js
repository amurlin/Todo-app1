import React, { useState } from "react";
import { Button } from "./Button";
import { v4 as uuidv4 } from "uuid";

export const TodoInput = (props) => {
  const { setError, setTodos, todos, error } = props;
  const [newTask, setNewTask] = useState("");

  
  // inputiin utgiig shinechleh
  const handleTaskChange = (event) => {
    setNewTask(event.target.value);
  };

// shine task nemeh
  const addTask = () => {
    if (newTask.length === 0) {
      setError("* Please enter a task.");
    } else {
      const currenDate = new Date ();
      const formattedDate = `${currenDate.getMonth() + 1}/ ${currenDate.getDate()}/${currenDate.getFullYear()}`;
      const formattedTime = currenDate.toLocaleDateString();

      console.log(`Task Added: "${newTask}" on ${formattedDate} at ${formattedTime}`);
      

      // tshine taskaa todo ruu nemne
      setTodos([...todos, { text: newTask, id: uuidv4(), status: "ACTIVE" }]); // '...todo' ni huuchin baisan bud todo-g n hadgaldag
      setNewTask("");
      setError("");
    }
  };
  return (
    <div className="addTask">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "6px",
          width: "73%",
        }}
      >
        <input
          placeholder="Add a new task..."
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
        {error.length > 1 && (
          <div style={{ color: "#EF4444", fontSize: "15px" }}>{error}</div>
        )}
      </div>
      <Button className={"addButton"} handleEvent={addTask} title={"Add"} />
    </div>
  );
};
