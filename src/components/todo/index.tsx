import React, { useState } from "react";
import { Todo } from "../../interface";
import { AddInput } from "../add-input";
import { Banner } from "../banner";
import { Header } from "../header/";
import { TodoList } from "../todo-list";

export const TodoComponent = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <div className="">
      <Banner />
      <Header title="Todo" />
      <AddInput setTodos={setTodos} todos={todos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};
