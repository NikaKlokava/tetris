import { Footer } from "../../shared/components/footer";
import { Header } from "../../shared/components/header";
import { useFigure } from "../../shared/hooks/useFigure";
import { Gamepad, GameField, SuccessField } from "./components";
import { isEqual } from "lodash";
import cl from "./tetris.module.css";
import { useStage } from "../../shared/hooks/useStage";
import { createGameField } from "../../shared/utils/utils";

export const Tetris = () => {
  const { figure, updateFigurePos, updateFigure } = useFigure();
  const { stage, setStage } = useStage({ figure });

  const startGame = () => {
    setStage(createGameField());
    updateFigure();
  };

  const moveFigure = (index: number) => {
    updateFigurePos({ x: index, y: 0, collided: false });
  };

  const dropFigure = () => {
    drop();
  };

  const drop = () => {
    updateFigurePos({ x: 0, y: 1, collided: false });
  };

  const move = ({ keyCode }: { keyCode: number }) => {
    isEqual(keyCode, 37) && moveFigure(-1);
    isEqual(keyCode, 39) && moveFigure(1);
    isEqual(keyCode, 40) && dropFigure();
  };

  return (
    <div
      className={cl.tetris_wrapper}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => move(e)}
    >
      <Header />
      <div className={cl.tetris_content}>
        <GameField stage={stage} />
        <SuccessField onStartGame={startGame} />
        <Gamepad />
      </div>
      <Footer />
    </div>
  );
};
