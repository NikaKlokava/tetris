import {
  mockFigureT,
  mockEmptyStage,
  mockStageWithFigure,
} from "../mocks/utils";
import { createGameField, drowTetrominoInField } from "../shared/utils/utils";

test("whether the function return a field data", () => {
  const result = createGameField();
  expect(result).toEqual(mockEmptyStage);
});

// test("function should drow tetro in field", () => {
//     const result = drowTetrominoInField(mockFigureT, mockEmptyStage);
//     expect(result).toEqual(mockStageWithFigure)

// })
