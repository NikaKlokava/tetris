import { render, renderHook, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useStage } from "../../../shared/hooks/useStage";
import App from "../../../App";
import { MemoryRouter } from "react-router-dom";

describe("Test buttons", () => {
  describe("The start game button is present on the screen", () => {
    test("When open the page", () => {
      render(
        <MemoryRouter initialEntries={["/tetris"]}>
          <App />
        </MemoryRouter>
      );

      const startGameBtn = screen.getByTestId("start-game-btn");
      expect(startGameBtn).toBeInTheDocument();
    });
  });

  describe("Gamepad buttons are present on the screen", () => {
    test("When you open the page", () => {
      render(
        <MemoryRouter initialEntries={["/tetris"]}>
          <App />
        </MemoryRouter>
      );

      const gamepadBtns = screen.getAllByTestId("gamepad-btn");
      gamepadBtns.forEach((elem) => expect(elem).toBeInTheDocument());
    });
  });

  describe("The pause button is not present on the screen", () => {
    test("when you open the page", () => {
      render(
        <MemoryRouter initialEntries={["/tetris"]}>
          <App />
        </MemoryRouter>
      );

      const pauseGameBtn = screen.queryByTestId("pause-game-btn");
      expect(pauseGameBtn).not.toBeInTheDocument();
    });
  });

  describe("The pause button should appear on the screen", () => {
    test("When you click on the start game button", () => {
      render(
        <MemoryRouter initialEntries={["/tetris"]}>
          <App />
        </MemoryRouter>
      );
      const startGameBtn = screen.getByTestId("start-game-btn");

      act(() => {
        startGameBtn.click();
      });

      expect(screen.getByTestId("pause-game-btn")).toBeInTheDocument();
    });
  });

  describe("The start game button should change the name on restart", () => {
    test("When you click on it", () => {
      render(
        <MemoryRouter initialEntries={["/tetris"]}>
          <App />
        </MemoryRouter>
      );
      const startGameBtn = screen.getByTestId("start-game-btn");

      act(() => {
        startGameBtn.click();
      });

      expect(startGameBtn).toHaveTextContent("Restart");
    });
  });

  describe("The pause button should not be on the screen", () => {
    test("When the game is over", () => {
      const { result } = renderHook(() => useStage());
      expect(result.current.gameOver).toBeFalsy();

      act(() => {
        result.current.changeOnGameOver();
      });

      expect(result.current.gameOver).toBeTruthy();

      render(
        <MemoryRouter initialEntries={["/tetris"]}>
          <App />
        </MemoryRouter>
      );

      const pauseGameBtn = screen.queryByTestId("pause-game-btn");
      expect(pauseGameBtn).not.toBeInTheDocument();
    });
  });
});
