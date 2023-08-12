import {
  mockFigureT,
  mockEmptyStage,
  mockSumInField,
  mockStageWithFigure,
} from "../mocks/utils";
import {
  createGameField,
  drowTetrominoInField,
  getOccupiedStage,
  getSumInField,
} from "../shared/utils/utils";

test("the function should return a field data", () => {
  const result = createGameField();
  expect(result).toEqual(mockEmptyStage);
});

test("function should drow tetro in field", () => {
  const newStage = getOccupiedStage(mockEmptyStage);
  drowTetrominoInField(mockFigureT, newStage);

  expect(newStage).toEqual(mockStageWithFigure);
});

test("function should return total summ in field", () => {
  const sum = getSumInField(mockStageWithFigure);
  expect(sum).toEqual(mockSumInField);
});

// test("function should rotate the figure in field", () => {

// })