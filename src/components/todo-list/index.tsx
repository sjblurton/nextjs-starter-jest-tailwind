import { Dispatch } from "react";
import { Todo } from "../../interface";
import { TodoFooter } from "../todo-footer";

type Props = {
  todos: Todo[];
  setTodos: Dispatch<React.SetStateAction<Todo[]>>;
};

export const TodoList = ({ todos, setTodos }: Props) => {
  const updateTask = (id: string) => {
    let updatedTasks = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    setTodos(updatedTasks);
  };

  const calcNumberOfUncompletedTasks = () => {
    let count = 0;
    todos.forEach((todo) => {
      if (!todo.completed) count++;
    });
    return count;
  };

  return (
    <div className="container mx-auto mt-8 rounded p-4 shadow h-[50vh] flex flex-col justify-between">
      <div className="overflow-auto h-5/6">
        <div>
          {todos.map((todo, index) => (
            <div
              data-testid="todo-item"
              key={index}
              className={`border-b border-slate-300 py-4 cursor-pointer ${
                todo.completed && "line-through text-slate-500"
              }`}
              onClick={() => updateTask(todo.id)}
            >
              {todo.task}
            </div>
          ))}
        </div>
      </div>
      <div>
        <TodoFooter numberOfIncompleteTasks={calcNumberOfUncompletedTasks()} />
      </div>
    </div>
  );
};
