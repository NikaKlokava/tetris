import { useCallback, useState } from "react";
import {
  EMPTY_TETROMINO,
  FIELD_WIDTH,
  getRandomTetromino,
} from "../utils/utils";

export const useFigure = () => {
  const [figure, setFigure] = useState<FigureType>({
    position: { x: 0, y: 0 },
    tetromino: EMPTY_TETROMINO,
  });

  const updateFigurePos = ({ x, y }: FigurePosition) => {
    setFigure((prev) => ({
      ...prev,
      position: { x: (prev.position.x += x), y: (prev.position.y += y) },
    }));
  };

  const updateFigure = useCallback((): void => {
    setFigure({
      position: { x: FIELD_WIDTH / 2 - 1, y: 0 },
      tetromino: getRandomTetromino(),
    });
  }, []);

  const rotateFigure = (figure: FigureType, dir: number) => {
    const newRotatedFigure = figure.tetromino.shape.map((_, i) =>
      figure.tetromino.shape.map((col) => {
        return col[i];
      })
    );
    if (dir > 0) return newRotatedFigure.map((row) => row.reverse());
    return newRotatedFigure.reverse()
  };

  return { figure, updateFigurePos, updateFigure, rotateFigure, setFigure };
};
