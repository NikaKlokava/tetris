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

  return { figure, updateFigurePos, updateFigure };
};
