import { Footer } from "../../shared/components/footer";
import { Header } from "../../shared/components/header";
import { Gamepad, GameField, SuccessField } from "./components";
import cl from "./tetris.module.css";
import { useStage } from "../../shared/hooks/useStage";
import { useInterval } from "../../shared/hooks/useInterval";
import { useEffect, useState } from "react";
import { useScore } from "../../shared/hooks/useScore";

export const Tetris = () => {
  const [delay, setDelay] = useState<number | null>(null);
  const [level, setLevel] = useState<number>(0);
  const { stage, completedRow, dropFigure, startGame, moveFigure, rotate } =
    useStage();

  const { score, totalRows } = useScore({ completedRow, level });

  useEffect(() => {
    if (totalRows > (level + 1) * 1) {
      setLevel((prev) => prev + 1);
      setDelay(1000 / (level + 1) + 200);
    }
  }, [totalRows, level]);

  const handleStartGameClick = () => {
    startGame();
    setDelay(1000);
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
