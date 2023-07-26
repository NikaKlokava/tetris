export const FIELD_WIDTH = 12;
export const FIELD_HEIGHT = 20;

export const createGameField = (): FieldData => {
  return Array.from(Array(FIELD_HEIGHT), () =>
    new Array(FIELD_WIDTH).fill([0, "empty"])
  );
};

const TETROMINOES = {
  init: { shape: [[0]], color: "rgb(16,16,16)" },
  I: {
    shape: [
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
    ],
    color: "#E0659E",
  },
  O: {
    shape: [
      ["O", "O"],
      ["O", "O"],
    ],
    color: "#C98FE3",
  },
  T: {
    shape: [
      [0, 0, 0],
      ["T", "T", "T"],
      [0, "T", 0],
    ],
    color: "#7579E6",
  },
  S: {
    shape: [
      [0, "S", "S"],
      ["S", "S", 0],
      [0, 0, 0],
    ],
    color: "#7CCFCF",
  },
  Z: {
    shape: [
      ["Z", "Z", 0],
      [0, "Z", "Z"],
      [0, 0, 0],
    ],
    color: "#73E699",
  },
  J: {
    shape: [
      [0, "J", 0],
      [0, "J", 0],
      ["J", "J", 0],
    ],
    color: "#D7E673",
  },
  L: {
    shape: [
      [0, "L", 0],
      [0, "L", 0],
      [0, "L", "L"],
    ],
    color: "#E6AA73",
  },
};

export const generateRandomTetromino = () => {
  const shapeTypes: ShapeTypes[] = ["I", "O", "T", "S", "Z", "J", "L"];

  const randomShape: ShapeTypes =
    shapeTypes[Math.floor(Math.random() * shapeTypes.length)];

  return TETROMINOES[randomShape];
};