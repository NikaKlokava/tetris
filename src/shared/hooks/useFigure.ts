import { useState } from "react";
import { FIELD_WIDTH, getRandomTetromino } from "../utils/utils";

export const useFigure = () => {
  const [figure, setFigure] = useState({
    position: { x: 0, y: 0 },
    shape: getRandomTetromino().shape,
    collided: false,
  });

  const updateFigurePos = ({ x, y, collided }: FigurePosition) => {
    setFigure((prev) => ({
      ...prev,
      position: { x: (prev.position.x += x), y: (prev.position.y += y) },
      collided,
    }));
  };

  const updateFigure = (): void => {
    setFigure({
      position: { x: FIELD_WIDTH / 2 - 2, y: 0 },
      shape: getRandomTetromino().shape,
      collided: false,
    });
  };

  return { figure, updateFigurePos, updateFigure };
};
