import {
  mockFigureT,
  mockEmptyStage,
  mockSumInField,
  mockStageWithFigure,
  mockStageWithRotatedFigure,
} from "../mocks/mocks_utils";
import {
  createGameField,
  drowTetrominoInField,
  getOccupiedStage,
  getSumInField,
  rotateFigure,
} from "../shared/utils/utils";

test("The function should return the field data", () => {
  const result = createGameField();
  expect(result).toEqual(mockEmptyStage);
});

test("The function should drow tetro in field", () => {
  const newStage = getOccupiedStage(mockEmptyStage);
  drowTetrominoInField(mockFigureT, newStage);

  expect(newStage).toEqual(mockStageWithFigure);
});

test("The function should return the total sum in field", () => {
  const sum = getSumInField(mockStageWithFigure);
  expect(sum).toEqual(mockSumInField);
});

test("The function should rotate the figure in field", () => {
  rotateFigure(mockFigureT);

  const newStage = getOccupiedStage(mockEmptyStage);
  drowTetrominoInField(mockFigureT, newStage);

  expect(newStage).toEqual(mockStageWithRotatedFigure);
});
