import React from "react";
import { TodoComponent } from "../components/todo";

const TodoPage = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="container mx-auto">
        <TodoComponent />
      </div>
    </div>
  );
};

export default TodoPage;
