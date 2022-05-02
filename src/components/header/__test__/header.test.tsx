import { render, screen } from "@testing-library/react";
import { Header } from "../index";

describe("Header component", () => {
  it("should render same test passed into title prop.", () => {
    const mockTitle = "my header";
    render(<Header title={mockTitle} />);

    const headingElement = screen.getByText(mockTitle);

    expect(headingElement).toBeInTheDocument();
  });

  it("should render by role h1.", () => {
    const mockTitle = "my header";
    render(<Header title={mockTitle} />);

    const headingElement = screen.getByRole("heading", { level: 1 });

    expect(headingElement).toBeInTheDocument();
  });

  it("should render by title 'Header'.", () => {
    const mockTitle = "my header";
    render(<Header title={mockTitle} />);

    const headingElement = screen.getByTitle("Header");

    expect(headingElement).toBeInTheDocument();
  });

  it("should render by testid 'heading-1'.", () => {
    const mockTitle = "my header";
    render(<Header title={mockTitle} />);

    const headingElement = screen.getByTestId("heading-1");

    expect(headingElement).toBeInTheDocument();
  });

  it("should render same test passed into title prop.", async () => {
    const mockTitle = "my header";
    render(<Header title={mockTitle} />);

    const headingElement = await screen.findByText(mockTitle);

    expect(headingElement).toBeInTheDocument();
  });

  it("should not render the element.", () => {
    const mockTitle = "my header";
    render(<Header title={mockTitle} />);

    const headingElement = screen.queryByText(/dogs/i);

    expect(headingElement).not.toBeInTheDocument();
  });

  it("should render the element.", () => {
    const mockTitle = "my header";
    render(<Header title={mockTitle} />);

    const headingElement = screen.getAllByText(mockTitle);

    expect(headingElement.length).toBe(1);
  });
});
