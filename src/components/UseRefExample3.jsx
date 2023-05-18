import { useState } from "react";
import { Todo } from "./Todo";

export const UseRefExample3 = () => {
  const [showTodo, setShowTodo] = useState(true);

  return (
    <div>
      {showTodo && <Todo />}
      <button
        className="btn btn-primary"
        onClick={() => setShowTodo(!setShowTodo)}
      >
        Toggle Todo
      </button>
    </div>
  );
};
