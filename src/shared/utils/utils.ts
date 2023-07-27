export const FIELD_WIDTH = 12;
export const FIELD_HEIGHT = 20;

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

// export const checkIfcollided = () => {};
