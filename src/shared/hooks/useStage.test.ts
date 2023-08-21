import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import {
  mockFigureTypeT,
  mockStageWithFigure,
  mockStageWithFigureDown,
  mockStageWithFigureLeft,
  mockStageWithFigureRight,
} from "../../mocks/mock_utils";
import * as mockUtils from "../../shared/utils/utils";
import { useStage } from "../../shared/hooks/useStage";

afterEach(() => {
  jest.clearAllMocks();
});

describe("Test the useStage hook", () => {
  test("The figure must be drawn in the field when you click start game", () => {
    const mock = jest.spyOn(mockUtils, "getRandomTetromino");
    mock.mockImplementation(() => mockFigureTypeT.tetromino);

    const { result } = renderHook(() => useStage());

    act(() => {
      result.current.startGame();
    });

    expect(result.current.stage).toEqual(mockStageWithFigure);
  });

  test("The figure should change the position on down when you click down", () => {
    const mock = jest.spyOn(mockUtils, "getRandomTetromino");
    mock.mockImplementation(() => mockFigureTypeT.tetromino);

    const { result } = renderHook(() => useStage());

    act(() => {
      result.current.startGame();
      result.current.moveDownFigure();
    });

    expect(result.current.stage).toEqual(mockStageWithFigureDown);
  });

  test("The figure should change the position on left when you click left", () => {
    const mock = jest.spyOn(mockUtils, "getRandomTetromino");
    mock.mockImplementation(() => mockFigureTypeT.tetromino);

    const { result } = renderHook(() => useStage());

    act(() => {
      result.current.startGame();
      result.current.moveFigure(-1);
    });

    expect(result.current.stage).toEqual(mockStageWithFigureLeft);
  });

  test("The figure should change the position on right when you click right", () => {
    const mock = jest.spyOn(mockUtils, "getRandomTetromino");
    mock.mockImplementation(() => mockFigureTypeT.tetromino);

    const { result } = renderHook(() => useStage());

    act(() => {
      result.current.startGame();
      result.current.moveFigure(1);
    });

    expect(result.current.stage).toEqual(mockStageWithFigureRight);
  });
});
