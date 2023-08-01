import { useEffect, useRef, useState } from "react";
import {
  getFutureSum,
  createGameField,
  getSumInField,
  getOccupiedStage,
  drowTetrominoInField,
  rotateFigure,
  clearCompletedRow,
} from "../utils/utils";
import { useFigure } from "./useFigure";
import { cloneDeep } from "lodash";

export const useStage = () => {
  const [stage, setStage] = useState<FieldData>(createGameField());
  const { figure, updateFigurePos, updateFigure, createNewFigure } =
    useFigure();

  const [completedRow, setCompletedRow] = useState(0);

  const prevStage = useRef<FieldData>(stage);
  const prevSum = useRef<number>(0);

  useEffect(() => {
    const drawFigure = () => {
      const occupiedStage = getOccupiedStage(prevStage.current);
      drowTetrominoInField(figure, occupiedStage, 0, 0);
      prevSum.current = getSumInField(occupiedStage);

      setStage(occupiedStage);
    };

    drawFigure();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [figure]);

  const moveFigure = (dir: -1 | 1) => {
    const futureSum = getFutureSum(figure, prevStage.current, dir, 0);
    if (futureSum === prevSum.current) updateFigurePos({ x: dir, y: 0 });
  };

  const dropFigure = () => {
    const futureSum = getFutureSum(figure, prevStage.current, 0, 1);

    if (futureSum === prevSum.current) {
      updateFigurePos({ x: 0, y: 1 });
    } else {
      clearCompletedRow(stage);
      setCompletedRow((prev) => prev + 1);
      prevStage.current = stage;
      createNewFigure();
    }
  };

  const startGame = () => {
    createNewFigure();
  };

  const rotate = () => {
    const figureCopy = cloneDeep(figure);
    rotateFigure(figureCopy);

    const sum = getFutureSum(figureCopy, prevStage.current, 0, 0);

    if (sum === prevSum.current) {
      updateFigure(figureCopy);
    }
  };

  return { stage, moveFigure, dropFigure, rotate, startGame };
};
