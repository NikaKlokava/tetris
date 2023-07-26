declare type Cell = Array<number, string>;

declare type FieldRow = Array<Cell>;

declare type FieldData = Array<FieldRow>;

declare type ShapeTypes = "I" | "O" | "T" | "S" | "Z" | "J" | "L";

declare type FigurePosition = {
    x: number;
    y: number;
    collided: boolean;
}
