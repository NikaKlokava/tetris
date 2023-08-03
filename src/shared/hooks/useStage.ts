import { useEffect, useRef, useState } from "react";
import {
  getFutureSum,
  createGameField,
  getSumInField,
  getOccupiedStage,
  drowTetrominoInField,
  rotateFigure,
  EMPTY_TETROMINO,
  FIELD_WIDTH,
} from "../utils/utils";
import { useFigure } from "./useFigure";
import { cloneDeep, isEqual } from "lodash";

export const useStage = () => {
  const [stage, setStage] = useState<FieldData>(createGameField());
  const [gameOver, setGameOver] = useState<boolean>(false);

  const { figure, updateFigurePos, updateFigure, createNewFigure } =
    useFigure();

  const [completedRow, setCompletedRows] = useState(0);

  const prevStage = useRef<FieldData>(stage);
  const prevSum = useRef<number>(0);

  useEffect(() => {
    const drawFigure = () => {
      setCompletedRows(0);
      const occupiedStage = getOccupiedStage(prevStage.current);
      drowTetrominoInField(figure, occupiedStage, 0, 0);
      prevSum.current = getSumInField(occupiedStage);

      setStage(occupiedStage);
    };

    drawFigure();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [figure]);

  const moveFigure = (dir: -1 | 1) => {
    if (!gameOver) {
      const futureSum = getFutureSum(figure, prevStage.current, dir, 0);
      if (futureSum === prevSum.current) updateFigurePos({ x: dir, y: 0 });
    }
  };

  const dropFigure = () => {
    if (!gameOver) {
      const futureSum = getFutureSum(figure, prevStage.current, 0, 1);

      if (futureSum === prevSum.current) {
        updateFigurePos({ x: 0, y: 1 });
      } else {
        if (figure.position.y < 1) {
          setGameOver(true);
        }

        clearCompletedRow(stage);

        prevStage.current = stage;
        createNewFigure();
      }
    }
  };

  const startGame = () => {
    setGameOver(false);
    createNewFigure();
    prevStage.current = createGameField();
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
        setCompletedRows((prev) => prev + 1);
      }
    });
  };

  return {
    stage,
    completedRow,
    gameOver,
    moveFigure,
    dropFigure,
    rotate,
    startGame,
  };
};
