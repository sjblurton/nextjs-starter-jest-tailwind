import React, { useState } from "react";
import { Todo } from "../../interface";

type Props = {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  todos: Todo[];
};

export const AddInput = ({ setTodos, todos }: Props) => {
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    if (!todo) return;
    let updatedTodos = [
      ...todos,
      {
        id: Math.random().toString(),
        task: todo,
        completed: false,
      },
    ];
    setTodos(updatedTodos);
    setTodo("");
  };

  return (
    <label className="flex">
      <input
        className="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add a new task here..."
      />
      <button className="btn-primary" onClick={addTodo}>
        Add
      </button>
    </label>
  );
};
