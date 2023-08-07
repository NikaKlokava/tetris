import { useCallback, useEffect, useRef, useState } from "react";
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

const initialStage = createGameField();

export const useStage = () => {
  const [stage, setStage] = useState<FieldData>(initialStage);
  const [gameOver, setGameOver] = useState<boolean>(false);

  const { figure, updateFigurePos, updateFigure, createNewFigure } =
    useFigure();

  const [completedRow, setCompletedRows] = useState(0);

  const prevStageRef = useRef<FieldData>(stage);
  const prevSumRef = useRef<number>(0);
  const figureRef = useRef<FigureType>(figure);

  useEffect(() => {
    figureRef.current = figure;
  }, [figure]);

  useEffect(() => {
    const drawFigure = () => {
      setCompletedRows(0);
      const occupiedStage = getOccupiedStage(prevStageRef.current);
      drowTetrominoInField(figure, occupiedStage, 0, 0);
      prevSumRef.current = getSumInField(occupiedStage);

      setStage(occupiedStage);
    };

    drawFigure();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [figure]);

  const rotate = useCallback(() => {
    const figureCopy = cloneDeep(figureRef.current);
    rotateFigure(figureCopy);

    const sum = getFutureSum(figureCopy, prevStageRef.current, 0, 0);

    if (sum === prevSumRef.current) {
      updateFigure(figureCopy);
    }
  }, [updateFigure]);

  const moveFigure = useCallback(
    (dir: -1 | 1) => {
      if (!gameOver) {
        const futureSum = getFutureSum(
          figureRef.current,
          prevStageRef.current,
          dir,
          0
        );
        if (futureSum === prevSumRef.current) updateFigurePos({ x: dir, y: 0 });
      }
    },
    [gameOver, updateFigurePos]
  );

  const moveDownFigure = useCallback(() => {
    if (!gameOver) {
      const futureSum = getFutureSum(
        figureRef.current,
        prevStageRef.current,
        0,
        1
      );

      if (futureSum === prevSumRef.current) {
        updateFigurePos({ x: 0, y: 1 });
        return true;
      }
      return false;
    }
  }, [gameOver, updateFigurePos]);

  const keydownHandler = useCallback(
    (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowRight": {
          moveFigure(1);
          break;
        }
        case "ArrowLeft": {
          moveFigure(-1);
          break;
        }
        case "ArrowDown": {
          moveDownFigure();
          break;
        }
        case "ArrowUp":
        case " ": {
          rotate();
          break;
        }
      }
      event.preventDefault();
    },
    [moveFigure, moveDownFigure, rotate]
  );

  useEffect(() => {
    console.log("add event listener");
    document.addEventListener("keydown", keydownHandler);
    return () => {
      console.log("remove event listener");
      document.removeEventListener("keydown", keydownHandler);
    };
  }, [keydownHandler]);

  const dropFigure = () => {
    if (!gameOver) {
      const isDropped = moveDownFigure();
      if (!isDropped) {
        if (figureRef.current.position.y < 1) {
          setGameOver(true);
        }

        // clearCompletedRow
        stage.forEach((row) => {
          const sumInRow = row.reduce((accum, curr) => {
            accum += curr[0];
            return accum;
          }, 0);

          if (isEqual(sumInRow, FIELD_WIDTH)) {
            const index = stage.indexOf(row);
            stage.splice(index, 1);
            stage.unshift(
              new Array(row.length).fill([0, EMPTY_TETROMINO.color])
            );
            setCompletedRows((prev) => prev + 1);
          }
        });

        prevStageRef.current = stage;
        createNewFigure();
      }
    }
  };

  const startGame = () => {
    setGameOver(false);
    createNewFigure();
    prevStageRef.current = initialStage;
  };

  return {
    stage,
    completedRow,
    gameOver,
    moveFigure,
    dropFigure,
    moveDownFigure,
    rotate,
    startGame,
  };
};
