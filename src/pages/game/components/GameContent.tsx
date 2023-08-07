import { GameField } from "./GameField";
import { SuccessField } from "./SuccessField";
import { useCallback, useEffect, useState } from "react";
import { useStage } from "../../../shared/hooks/useStage";
import { useScore } from "../../../shared/hooks/useScore";
import { useInterval } from "../../../shared/hooks/useInterval";
import { StartGameBtn } from "./StartGameBtn";
import { Gamepad } from "./Gamepad";
import cl from "../tetris.module.css";

export const GameContent = () => {
  const [delay, setDelay] = useState<number | null>(null);
  const [level, setLevel] = useState(0);
  const {
    stage,
    completedRow,
    gameOver,
    dropFigure,
    startGame,
    moveFigure,
    rotate,
  } = useStage();

  const { score, totalRows, updateScore } = useScore({ completedRow, level });

  useEffect(() => {
    if (totalRows > (level + 1) * 10) {
      setLevel((prev) => prev + 1);
      setDelay(1000 / (level + 1) + 200);
    }
    gameOver && setDelay(null);
  }, [totalRows, level, gameOver]);

  const handleStartGameClick = useCallback(() => {
    startGame();
    setLevel(0);
    setDelay(1200);
    updateScore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMouseUp = useCallback(() => {
    setDelay(1000 / (level + 1) + 200);
  }, [level]);

  const handleDropFigureClick = useCallback(() => {
    dropFigure();
    setDelay(null);
  }, [dropFigure]);

  useInterval(() => dropFigure(), delay);

  return (
    <>
      <GameField stage={stage} />
      <div className={cl.page_content}>
        <SuccessField
          rows={totalRows}
          level={level}
          score={score}
          gameOver={gameOver}
        />
        <StartGameBtn onPress={handleStartGameClick} />
        <div className={cl.gamepad_wrapper}>
          <Gamepad
            move={moveFigure}
            drop={handleDropFigureClick}
            rotate={rotate}
            up={handleMouseUp}
          />
        </div>
      </div>
    </>
  );
};
