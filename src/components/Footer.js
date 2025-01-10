import React from 'react';
import { Button } from './Button';

export const Footer = (props) => {
    const {todos, setTodos} = props;

    // duussan taskuudaa ustgana
  const clearCompleted = (task) => {
    const newTodos = todos
      .filter((todos) => todos.status === "ACTIVE")
      .filter((todos) => todos.id !== task.id);
    setTodos(newTodos);
  };

  

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
      {todos.length > 0 && (
        <>
          <hr />
          <div className="completedTask">
            {todos.filter((task) => task.status === "DONE").length} of {todos.length}{" "}
            tasks completed
            <Button className={'clearCompleted'} handleEvent={() => clearCompleted(todos)} title={"Clear Completed"} />
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