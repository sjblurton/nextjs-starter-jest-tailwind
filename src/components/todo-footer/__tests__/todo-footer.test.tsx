import { render, screen } from "@testing-library/react";
import { TodoFooter } from "../index";

describe("TodoFooter component test", () => {
  it("should render the paragraph element with the text '0 tasks left'.", () => {
    render(<TodoFooter numberOfIncompleteTasks={0} />);

    const paragraphElement = screen.getByText("0 tasks left");

    expect(paragraphElement).toBeInTheDocument();
  });

  it("should render the paragraph element single with the text '1 task left'.", () => {
    render(<TodoFooter numberOfIncompleteTasks={1} />);

    const paragraphElement = screen.getByText("1 task left");

    expect(paragraphElement).toBeInTheDocument();
  });

  it("should render the paragraph element single task.", () => {
    render(<TodoFooter numberOfIncompleteTasks={1} />);

    const paragraphElement = screen.getByTestId("footer");

    expect(paragraphElement).toHaveTextContent(" task ");
  });

  it("should render the paragraph element plural tasks.", () => {
    render(<TodoFooter numberOfIncompleteTasks={5} />);

    const paragraphElement = screen.getByTestId("footer");

    expect(paragraphElement.textContent).toContain("tasks");
  });
});
