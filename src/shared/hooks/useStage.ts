import { useEffect, useRef, useState } from "react";
import {
  getFutureSum,
  createGameField,
  getSumInField,
  getOccupiedStage,
  drowTetrominoInField,
  rotateFigure,
  // clearCompletedRow,
  EMPTY_TETROMINO,
  FIELD_WIDTH,
  // getSumInRow,
} from "../utils/utils";
import { useFigure } from "./useFigure";
import { cloneDeep, isEqual } from "lodash";

export const useStage = () => {
  const [stage, setStage] = useState<FieldData>(createGameField());
  const [delay, setDelay] = useState<number | null>(null);
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

      prevStage.current = stage;
      createNewFigure();
    }
  };

  const startGame = () => {
    setDelay(1000);
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

  const clearCompletedRow = (stage: FieldData) => {
    stage.forEach((row) => {
      const sumInRow = row.reduce((accum, curr) => {
        accum += curr[0];
        return accum;
      }, 0);

      if (isEqual(sumInRow, FIELD_WIDTH)) {
        const index = stage.indexOf(row);
        stage.splice(index, 1);
        stage.unshift(new Array(row.length).fill([0, EMPTY_TETROMINO.color]));
        setCompletedRow((prev) => prev + 1);
      }
    });
  };

  return {
    stage,
    delay,
    completedRow,
    moveFigure,
    dropFigure,
    rotate,
    startGame,
  };
};
