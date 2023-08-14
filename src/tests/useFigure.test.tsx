import { act, renderHook } from "@testing-library/react";
import {
  mockFigurePos,
  mockFigureTypeT,
  mockTetrominoes,
} from "../mocks/mocks_utils";
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
    }) !== -1;

  const isPositionPresent = isEqual(
    result.current.figure.position,
    mockFigurePos
  );

  expect(isTetroPresent && isPositionPresent).toBeTruthy();
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
