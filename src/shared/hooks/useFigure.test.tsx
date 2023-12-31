import { act, renderHook } from "@testing-library/react";
import { mockFigureTypeT, mockTetrominoes } from "../../mocks/mock_utils";
import { useFigure } from "./useFigure";
import { isEqual } from "lodash";
import { initialPosition } from "../utils/utils";

describe("Test the useFigure hook", () => {
  test("The function should create a new figure", () => {
    const { result } = renderHook(() => useFigure());

    act(() => {
      result.current.createNewFigure();
    });

    const isTetroPresent =
      mockTetrominoes.findIndex((mockTetro) => {
        return isEqual(mockTetro, result.current.figure.tetromino);
      }) !== -1;

    const isPositionPresent = isEqual(
      result.current.figure.position,
      initialPosition
    );

    expect(isTetroPresent).toBeTruthy();
    expect(isPositionPresent).toBeTruthy();
  });

  test("The function should update the figure position", () => {
    const { result } = renderHook(() => useFigure());
    const prevPosition = result.current.figure.position;
    act(() => {
      result.current.updateFigurePos({ x: 1, y: 1 });
      result.current.updateFigurePos({ x: 5, y: 1 });
    });
    expect(result.current.figure.position).not.toEqual(prevPosition);
  });

  test("The function should update the figure", () => {
    const { result } = renderHook(() => useFigure());

    act(() => {
      result.current.updateFigure(mockFigureTypeT);
    });

    expect(result.current.figure).toEqual(mockFigureTypeT);
  });
});
