import React, { useCallback, useState } from "react";

export const UseCallbackExample = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    setTasks((prevState) => [...prevState, "Some Task"]);
  };

  return (
    <div>
      <Button addTask={addTask} />
      {tasks.map((task, index) => (
        <p key={index}>{task}</p>
      ))}
    </div>
  );
};

const Button = ({ addTask }) => {
  console.log("button rendered");
  return (
    <div>
      <button className="btn btn-primary" onClick={addTask}>
        Add task
      </button>
    </div>
  );
};
