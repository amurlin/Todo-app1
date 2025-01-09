import React from 'react'
import { Button } from './Button';

export const Footer = (props) => {
    const {todo, setTodo} = props;

    // duussan taskuudaa ustgana
  const clearCompleted = (task) => {
    const newTodos = todo
      .filter((todo) => todo.status === "ACTIVE")
      .filter((todo) => todo.id !== task.id);
    setTodo(newTodos);
  };

  

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
      {todo.length > 0 && (  // Only render this if there are tasks
        <>
          <hr />
          <div className="completedTask">
            {todo.filter((task) => task.status === "DONE").length} of {todo.length}{" "}
            tasks completed
            <Button className={'clearCompleted'} handleEvent={() => clearCompleted(todo)} title={"Clear Completed"} />
          </div>
        </>
      )}
  
      <div className="PoweredByPinecone">
        <p className="text" style={{ color: "#6B7280" }}>
          Powered by
        </p>
        <a
          href="https://pinecone.mn/"
          style={{
            textDecoration: "none",
            cursor: "pointer",
            color: "#3C82F6",
          }}
        >
          Pinecone Academy
        </a>
      </div>
    </div>
  );
}  