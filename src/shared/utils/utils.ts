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
      [1, 1, 1],
      [0, 1, 0],
      [0, 0, 0],
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
      [0, 1, 0],
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

export const getOccupiedStage = (prevStage: FieldData | null): FieldData => {
  return prevStage!.map((row) =>
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
  figure.tetromino.shape.forEach((row: Array<number>, y: number) => {
    row.forEach((elem: number, x: number) => {
      if (isEqual(elem, 1)) {
        stage[y + figure.position.y + moveY!][x + figure.position.x + moveX!] =
          [elem, figure.tetromino.color];
      }
    });
  });
};

export const getSumInField = (arr: FieldData) => {
  return arr.slice(0, -1).reduce((accumulator, fieldRow, rowIndex) => {
    const numsInRow = fieldRow
      .slice(1, -1)
      .reduce((accum: number, cell: Cell, index: number) => {
        return accum + cell[0];
      }, 0);
    return (accumulator += numsInRow);
  }, 0);
};

export const getFutureSum = (
  figure: FigureType,
  stage: FieldData | null,
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
