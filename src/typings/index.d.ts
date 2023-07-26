declare type Cell = Array<number, string>;

declare type FieldRow = Array<Cell>;

declare type FieldData = Array<FieldRow>;

declare type ShapeTypes = 0 | "I" | "O" | "T" | "S" | "Z" | "J" | "L" ;

declare type FigurePosition = {
  x: number;
  y: number;
  collided: boolean;
};

declare type FigureType = {
  position: {
    x: number;
    y: number;
  };
  shape: (string | number)[][] | string[][];
  collided: boolean;
};
