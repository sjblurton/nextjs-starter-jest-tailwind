import React from "react";
import Link from "next/link";

type Props = {
  numberOfIncompleteTasks: number;
};

export const TodoFooter = ({ numberOfIncompleteTasks }: Props) => {
  return (
    <div className="todo-footer">
      <p data-testid="footer">
        {numberOfIncompleteTasks}{" "}
        {numberOfIncompleteTasks === 1 ? "task" : "tasks"} left
      </p>
      <Link href="/followers">Followers</Link>
    </div>
  );
};
