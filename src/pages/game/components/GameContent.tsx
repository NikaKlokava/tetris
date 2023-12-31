import { GameField } from "./GameField";
import { Tablo } from "./Tablo";
import { useCallback, useEffect, useRef, useState } from "react";
import { useStage } from "../../../shared/hooks/useStage";
import { useScore } from "../../../shared/hooks/useScore";
import { useInterval } from "../../../shared/hooks/useInterval";
import { Gamepad } from "./Gamepad";
import { Button } from "./Button";
import { PauseModal } from "./PauseModal";
import cl from "../tetris.module.css";

export const GameContent = () => {
  const [delay, setDelay] = useState<number | null>(null);
  const [level, setLevel] = useState(0);
  const [pause, setPause] = useState(false);
  const pauseBtn = useRef(false);

  const { stage, completedRow, gameOver, dropFigure, startGame } = useStage();

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
    pauseBtn.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePauseGameClick = useCallback(() => {
    setPause(true);
    setDelay(null);
  }, []);

  const handleResumeGameClick = useCallback(() => {
    setPause(false);
    setDelay(1000 / (level + 1) + 200);
  }, [level]);

  useInterval(() => dropFigure(), delay);

  return (
    <>
      <GameField stage={stage} />
      <div className={cl.page_content}>
        <Tablo
          rows={totalRows}
          level={level}
          score={score}
          gameOver={gameOver}
        />
        <div className={cl.start_pause_wrapper}>
          <Button
            text={pauseBtn.current ? "Restart" : "Start Game"}
            onPress={handleStartGameClick}
            testId={"start-game-btn"}
          />
          {pauseBtn.current && !gameOver && (
            <Button
              text="Pause"
              onPress={handlePauseGameClick}
              testId={"pause-game-btn"}
            />
          )}
        </div>
        <div className={cl.gamepad_wrapper}>
          <Gamepad />
        </div>
      </div>
      {pause && <PauseModal onPlay={handleResumeGameClick} />}
    </>
  );
};
