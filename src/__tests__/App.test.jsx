import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

describe("Shopping App", () => {
  test("renders dark mode toggle button", () => {
    render(<App />);
    expect(
      screen.getByText(/switch to dark mode/i)
    ).toBeInTheDocument();
  });

  test("toggles dark mode text", () => {
    render(<App />);
    const button = screen.getByText(/switch to dark mode/i);

    fireEvent.click(button);

    expect(
      screen.getByText(/switch to light mode/i)
    ).toBeInTheDocument();
  });

  test("adds item to cart", () => {
    render(<App />);

    const buttons = screen.getAllByText(/add to cart/i);
    fireEvent.click(buttons[0]);

    expect(
      screen.getByText(/is in your cart/i)
    ).toBeInTheDocument();
  });

  test("filters products", () => {
    render(<App />);

    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "Dairy" },
    });

    expect(screen.getByText(/milk/i)).toBeInTheDocument();
  });

  test("updates cart total", () => {
    render(<App />);

    const buttons = screen.getAllByText(/add to cart/i);

    fireEvent.click(buttons[0]);
    fireEvent.click(buttons[1]);

    expect(screen.getByText(/total items: 2/i)).toBeInTheDocument();
  });
});