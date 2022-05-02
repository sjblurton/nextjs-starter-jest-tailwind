import { fireEvent, render, screen } from "@testing-library/react";
import { AddInput } from "../index";

const mockProps = {
  setTodos: jest.fn(),
  todos: [{ id: "1", task: "a todo", completed: false }],
};

describe("AddInput component test", () => {
  it("should render the input element", () => {
    render(<AddInput {...mockProps} />);

    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);

    expect(inputElement).toBeInTheDocument();
  });

  it("should be able to type into input.", () => {
    const changeEventInput = "go shopping.";

    render(<AddInput {...mockProps} />);

    const inputElement: HTMLInputElement = screen.getByPlaceholderText(
      /Add a new task here.../i
    );

    fireEvent.change(inputElement, { target: { value: changeEventInput } });

    expect(inputElement.value).toBe(changeEventInput);
  });

  it("should type into input then return value to empty after submit.", () => {
    const changeEventInput = "go shopping.";

    render(<AddInput {...mockProps} />);

    const inputElement: HTMLInputElement = screen.getByPlaceholderText(
      /Add a new task here.../i
    );
    const buttonElement: HTMLButtonElement = screen.getByRole("button", {
      name: /add/i,
    });

    fireEvent.change(inputElement, { target: { value: changeEventInput } });

    fireEvent.click(buttonElement);

    expect(inputElement.value).toBe("");
  });
});
