import { act, renderHook } from "@testing-library/react";
import { mockFigurePos, mockTetrominoes } from "../mocks/mocks_utils";
import { useFigure } from "../shared/hooks/useFigure";
import { isEqual } from "lodash";

test("The function should create a new figure", () => {
  const { result } = renderHook(() => useFigure());

  act(() => {
    result.current.createNewFigure();
  });

  const isTetroPresent =
    mockTetrominoes.findIndex((mockTetro) => {
      return isEqual(mockTetro, result.current.figure.tetromino);
    }) !== 1;

  const isPositionPresent = isEqual(
    result.current.figure.position,
    mockFigurePos
  );

  expect(isTetroPresent && isPositionPresent).toBeTruthy();
});
