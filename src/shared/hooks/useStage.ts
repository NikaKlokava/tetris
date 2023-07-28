import { useEffect, useRef, useState } from "react";
import {
  getFutureSum,
  createGameField,
  getSumInField,
  getOccupiedStage,
  drowTetrominoInField,
} from "../utils/utils";
import { useFigure } from "./useFigure";
import { clone } from "lodash";

export const useStage = () => {
  const [stage, setStage] = useState<FieldData>(createGameField());
  const { figure, updateFigurePos, updateFigure, rotateFigure, setFigure } =
    useFigure();
  // const [occupied, setOccupied] = useState<boolean>(false);
  const prevStage = useRef<FieldData>(stage);
  const prevSum = useRef<number>(0);

  useEffect(() => {
    const drawFigure = () => {
      const occupiedStage = getOccupiedStage(prevStage.current);

      drowTetrominoInField(figure, occupiedStage, 0, 0);

      const num = getSumInField(occupiedStage);
      if (num !== prevSum.current) updateFigure();

      return occupiedStage;
    };

    setStage(() => drawFigure());

    prevSum.current = getSumInField(stage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [figure]);

  const moveFigure = (dir: number) => {
    const futureSum = getFutureSum(figure, prevStage, dir, 0);
    if (futureSum === prevSum.current) updateFigurePos({ x: dir, y: 0 });
  };

  const dropFigure = () => {
    const futureSum = getFutureSum(figure, prevStage, 0, 1);
    if (futureSum === prevSum.current) {
      updateFigurePos({ x: 0, y: 1 });
    } else {
      prevStage.current = stage;
      updateFigurePos({ x: 0, y: 0 });
    }
  };

  const startGame = () => {
    updateFigure();
  };

  const rotate = () => {
    const figureCopy = clone(figure);
    const newRotatedFigure = rotateFigure(figureCopy);
    const sum = getSumInField(stage);
    // console.log(sum, prevSum.current);
    // console.log("x", figure.position.x, "y", figure.position.y);
    if (sum === prevSum.current)
      setFigure((prev) => ({
        ...prev,
        tetromino: {
          shape: newRotatedFigure,
          color: figure.tetromino.color,
        },
      }));
  };

  return { stage, moveFigure, dropFigure, rotate, startGame };
};
