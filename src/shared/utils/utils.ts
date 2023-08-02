import { isEqual } from "lodash";
import { clone } from "lodash";

export const FIELD_WIDTH = 12;
export const FIELD_HEIGHT = 20;

export const linePoints = [40, 100, 300, 1200];

export const createGameField = (): FieldData => {
  return Array.from(Array(FIELD_HEIGHT + 1), () =>
    new Array(FIELD_WIDTH + 2).fill([0, EMPTY_TETROMINO.color])
  );
};

export const EMPTY_TETROMINO = { shape: [[0]], color: "rgb(16,16,16)" };

export const TETROMINOES = {
  I: {
    shape: [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
    ],
    color: "#E0659E",
  },
  O: {
    shape: [
      [1, 1],
      [1, 1],
    ],
    color: "#C98FE3",
  },
  T: {
    shape: [
      [0, 0, 0],
      [1, 1, 1],
      [0, 1, 0],
    ],
    color: "#7579E6",
  },
  S: {
    shape: [
      [0, 1, 1],
      [1, 1, 0],
      [0, 0, 0],
    ],
    color: "#7CCFCF",
  },
  Z: {
    shape: [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0],
    ],
    color: "#73E699",
  },
  J: {
    shape: [
      [0, 1, 0], //1
      [0, 1, 0],
      [1, 1, 0],
    ],
    color: "#D7E673",
  },
  L: {
    shape: [
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 1],
    ],
    color: "#E6AA73",
  },
};

export const getRandomTetromino = () => {
  const keys = Object.keys(TETROMINOES);
  const randomShape = keys[Math.floor(Math.random() * keys.length)];
  return TETROMINOES[randomShape as ShapeTypes];
};

export const getOccupiedStage = (prevStage: FieldData): FieldData => {
  return prevStage.map((row) =>
    row.map((elem) =>
      isEqual(elem[1], EMPTY_TETROMINO.color)
        ? [0, EMPTY_TETROMINO.color]
        : elem
    )
  );
};

export const drowTetrominoInField = (
  figure: FigureType,
  stage: FieldData,
  moveX?: number,
  moveY?: number
) => {
  figure.tetromino.shape.forEach((row: any, y: any) => {
    row.forEach((elem: any, x: any) => {
      if (isEqual(elem, 1)) {
        stage[y + figure.position.y + moveY][x + figure.position.x + moveX] = [
          elem,
          figure.tetromino.color,
        ];
      }
    });
  });
};

export const getSumInField = (arr: FieldData) => {
  return arr.reduce((accumulator, fieldRow, rowIndex) => {
    //slice
    if (isEqual(rowIndex, arr.length - 1)) return accumulator;
    const numsInRow = fieldRow.reduce(
      (accum: number, cell: Cell, index: number) => {
        if (isEqual(index, 0) || isEqual(index, fieldRow.length - 1))
          return accum;
        return accum + cell[0];
      },
      0
    );
    return (accumulator += numsInRow);
  }, 0);
};

export const getFutureSum = (
  figure: FigureType,
  stage: FieldData,
  moveX: number,
  moveY: number
) => {
  const copyStage = clone(stage);
  const occupiedFutureStage = getOccupiedStage(copyStage);

  drowTetrominoInField(figure, occupiedFutureStage, moveX, moveY);

  return getSumInField(occupiedFutureStage);
};

export const rotateFigure = (figure: FigureType) => {
  const shape = figure.tetromino.shape.map((_, i) =>
    figure.tetromino.shape.map((col) => {
      return col[i];
    })
  );

  figure.tetromino.shape = shape.map((row) => row.reverse());
};
// const linePoints = [40, 100, 300, 1200]
// const calculateScore = () => {
//   if(completedRow > 0) {
//     setScore(prev => prev + linePoints[completedRow - 1] * (level + 1) );
//   }
// }
