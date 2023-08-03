declare type Cell = Array<number, string>;

declare type FieldRow = Array<Cell>;

declare type FieldData = Array<FieldRow>;

declare type ShapeTypes = "I" | "O" | "T" | "S" | "Z" | "J" | "L";

declare type FigurePosition = {
  x: number;
  y: number;
};

declare type FigureType = {
  position: {
    x: number;
    y: number;
  };
  tetromino: { shape: number[][]; color: string };
};
