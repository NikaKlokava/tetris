import {
  mockFigureTypeT,
  mockEmptyStage,
  mockSumInField,
  mockStageWithFigure,
  mockStageWithRotatedFigure,
  mockTetrominoes,
} from "../mocks/mock_utils";
import {
  createGameField,
  drawTetrominoInField,
  getOccupiedStage,
  getRandomTetromino,
  getSumInField,
  rotateFigure,
} from "../shared/utils/utils";

import { isEqual } from "lodash";

test("The function should return the field data", () => {
  const result = createGameField();
  expect(result).toEqual(mockEmptyStage);
});

test("The function should return the random tetromino", () => {
  const randomTetro = getRandomTetromino();

  const isTetroPresent =
    mockTetrominoes.findIndex((mockTetro) => {
      return isEqual(mockTetro, randomTetro);
    }) !== 1;
  expect(isTetroPresent).toBeTruthy();
});

test("The function should drow tetro in field", () => {
  const newStage = getOccupiedStage(mockEmptyStage);
  drawTetrominoInField(mockFigureTypeT, newStage);

  expect(newStage).toEqual(mockStageWithFigure);
});

test("The function should return the total sum in field", () => {
  const sum = getSumInField(mockStageWithFigure);
  expect(sum).toEqual(mockSumInField);
});

test("The function should rotate the figure in field", () => {
  rotateFigure(mockFigureTypeT);

  const newStage = getOccupiedStage(mockEmptyStage);
  drawTetrominoInField(mockFigureTypeT, newStage);

  expect(newStage).toEqual(mockStageWithRotatedFigure);
});
