import { useEffect, useRef, useState } from "react";
import { createGameField, EMPTY_TETROMINO } from "../utils/utils";
import { isEqual, clone } from "lodash";
import { useFigure } from "./useFigure";

export const useStage = () => {
  const [stage, setStage] = useState<FieldData>(createGameField());
  const { figure, updateFigurePos, updateFigure } = useFigure();
  // const prevStage = useRef<FieldData>(stage);

  useEffect(() => {
    const drawFigure = (prevStage: FieldData) => {
      const newStage = prevStage.map((row) =>
        row.map((elem) =>
          isEqual(elem[1], EMPTY_TETROMINO.color)
            ? [0, EMPTY_TETROMINO.color]
            : elem
        )
      );

      // const occupiedStage = clone(prevStage.current);
      // console.log(occupiedStage);

      figure.tetromino.shape.forEach((row, y) => {
        row.forEach((elem, x) => {
          if (isEqual(elem, 1)) {
            newStage[y + figure.position.y][x + figure.position.x] = [
              elem,
              figure.tetromino.color,
            ];
          }
        });
      });

      return newStage;
    };

    setStage((prev) => drawFigure(prev));
  }, [figure]);

  const moveFigure = (dir: number) => {
    updateFigurePos({ x: dir, y: 0 });
  };

  const dropFigure = () => {
    updateFigurePos({ x: 0, y: 1 });
  };

  const startGame = () => {
    updateFigure();
    // setStage(createGameField());
  };

  return { stage, moveFigure, dropFigure, startGame };
};
