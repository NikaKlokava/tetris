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

declare type FigureColors =
  | "rgb(16,16,16)"
  | "#E0659E"
  | "#C98FE3"
  | "#7579E6"
  | "#7CCFCF"
  | "#73E699"
  | "#D7E673"
  | "#E6AA73";

declare type ButtonTypes = "left" | "right" | "down" | "rotate";
