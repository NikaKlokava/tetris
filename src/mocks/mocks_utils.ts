const stColor = "rgb(16,16,16)";

const emptyArrData = Array.from({ length: 14 }, () => [0, stColor]);

export const mockSumInField = 4;

export const mockEmptyStage = Array.from({ length: 21 }, () => emptyArrData);

export const mockFigureT = {
  position: { x: 6, y: 0 },
  tetromino: {
    shape: [
      [1, 1, 1],
      [0, 1, 0],
      [0, 0, 0],
    ],
    color: "#7579E6",
  },
};

const rowWithFigure1 = [
  ...Array.from({ length: 6 }, () => [0, stColor]),
  [1, mockFigureT.tetromino.color],
  [1, mockFigureT.tetromino.color],
  [1, mockFigureT.tetromino.color],
  ...Array.from({ length: 5 }, () => [0, stColor]),
];
const rowWithFigure2 = [
  ...Array.from({ length: 7 }, () => [0, stColor]),
  [1, mockFigureT.tetromino.color],
  ...Array.from({ length: 6 }, () => [0, stColor]),
];
const rowWithRotatedFigure1 = [
  ...Array.from({ length: 8 }, () => [0, stColor]),
  [1, mockFigureT.tetromino.color],
  ...Array.from({ length: 5 }, () => [0, stColor]),
];
const rowWithRotatedFigure2 = [
  ...Array.from({ length: 7 }, () => [0, stColor]),
  [1, mockFigureT.tetromino.color],
  [1, mockFigureT.tetromino.color],
  ...Array.from({ length: 5 }, () => [0, stColor]),
];

export const mockStageWithFigure = [
  rowWithFigure1,
  rowWithFigure2,
  ...Array.from({ length: 19 }, () => emptyArrData),
];

export const mockStageWithRotatedFigure = [
  rowWithRotatedFigure1,
  rowWithRotatedFigure2,
  rowWithRotatedFigure1,
  ...Array.from({ length: 18 }, () => emptyArrData),
];

export const mockTetrominoes = [
  {
    shape: [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
    ],
    color: "#E0659E",
  },
  {
    shape: [
      [1, 1],
      [1, 1],
    ],
    color: "#C98FE3",
  },
  {
    shape: [
      [1, 1, 1],
      [0, 1, 0],
      [0, 0, 0],
    ],
    color: "#7579E6",
  },
  {
    shape: [
      [0, 1, 1],
      [1, 1, 0],
      [0, 0, 0],
    ],
    color: "#7CCFCF",
  },
  {
    shape: [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0],
    ],
    color: "#73E699",
  },
  {
    shape: [
      [0, 1, 0],
      [0, 1, 0],
      [1, 1, 0],
    ],
    color: "#D7E673",
  },
  {
    shape: [
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 1],
    ],
    color: "#E6AA73",
  },
];

export const mockFigurePos = { x: 5, y: 0 };
