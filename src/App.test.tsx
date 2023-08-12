import { render, screen } from "@testing-library/react";
import App from "./App";

test("render start game btn", () => {
  render(<App />);

  const linkElement = screen.getByText(/Tetris/i);
  expect(linkElement).toBeInTheDocument();
});
