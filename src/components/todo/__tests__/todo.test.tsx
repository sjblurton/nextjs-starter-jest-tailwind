import { fireEvent, render, screen } from "@testing-library/react";
import { TodoComponent } from "../index";

const tasks = ["go shopping.", "sign god save the queen", "get a sweet e-bike"];

const addTask = (tasks: string[]) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement: HTMLButtonElement = screen.getByRole("button", {
    name: /add/i,
  });
  tasks.forEach((task) => {
    fireEvent.change(inputElement, {
      target: { value: task },
    });

    fireEvent.click(buttonElement);
  });
};

describe("TodoComponent component test", () => {
  it("should render text from input into todos list", () => {
    render(<TodoComponent />);

    addTask([tasks[0]]);

    const divElement: HTMLDivElement = screen.getByText(tasks[0]);

    expect(divElement).toBeInTheDocument();
  });

  it("should render multiple text from input into a list", () => {
    render(<TodoComponent />);

    addTask(tasks);

    const divElements: HTMLDivElement[] = screen.getAllByTestId("todo-item");

    expect(divElements.length).toBe(tasks.length);
  });

  it("should render text without completed format", () => {
    render(<TodoComponent />);

    addTask([tasks[0]]);

    const divElement: HTMLDivElement = screen.getByText(tasks[0]);

    expect(divElement).not.toHaveClass("line-through");
  });

  it("should render text with completed format", () => {
    render(<TodoComponent />);

    addTask([tasks[0]]);

    const divElement: HTMLDivElement = screen.getByText(tasks[0]);

    fireEvent.click(divElement);

    expect(divElement).toHaveClass("line-through");
  });
});
