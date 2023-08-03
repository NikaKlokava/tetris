import { Footer } from "../../shared/components/footer";
import { Header } from "../../shared/components/header";
import { Gamepad, GameField, SuccessField } from "./components";
import { useStage } from "../../shared/hooks/useStage";
import { useInterval } from "../../shared/hooks/useInterval";
import { useEffect, useState } from "react";
import { useScore } from "../../shared/hooks/useScore";
import cl from "./tetris.module.css";

export const Tetris = () => {
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

  const handleStartGameClick = () => {
    startGame();
    setLevel(0);
    setDelay(1200);
    updateScore();
  };

  const handleMouseUp = () => {
    setDelay(1000 / (level + 1) + 200);
  };

  const handleDropFigureClick = () => {
    dropFigure();
    setDelay(null);
  };

  useInterval(() => dropFigure(), delay);

  return (
    <div className={cl.tetris_wrapper} role="button" tabIndex={0}>
      <GameField stage={stage} />
      <Header />
      <div className={cl.page_content}>
        <SuccessField
          onStartGame={handleStartGameClick}
          rows={totalRows}
          level={level}
          score={score}
          gameOver={gameOver}
        />
        <Gamepad
          drop={handleDropFigureClick}
          move={moveFigure}
          rotate={rotate}
          up={handleMouseUp}
        />
      </div>
      <Footer />
    </div>
  );
};
