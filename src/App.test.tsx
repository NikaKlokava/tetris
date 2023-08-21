import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("render start game btn", () => {
  render(
    <MemoryRouter initialEntries={["/tetris"]}>
      <App />
    </MemoryRouter>
  );

  const linkElement = screen.getByText(/Tetris/i);
  expect(linkElement).toBeInTheDocument();
});
