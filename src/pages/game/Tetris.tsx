import { Footer } from "../../shared/components/footer";
import { Header } from "../../shared/components/header";
import { Gamepad, GameField, SuccessField } from "./components";
import { isEqual } from "lodash";
import cl from "./tetris.module.css";
import { useStage } from "../../shared/hooks/useStage";

export const Tetris = () => {
  const { stage, moveFigure, dropFigure, rotate, startGame } = useStage();

  const move = ({ keyCode }: { keyCode: number }) => {
    isEqual(keyCode, 37) && moveFigure(-1);
    isEqual(keyCode, 39) && moveFigure(1);
    isEqual(keyCode, 40) && dropFigure();
    isEqual(keyCode, 32) && rotate();
  };

  return (
    <div
      className={cl.tetris_wrapper}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => move(e)}
    >
      <GameField stage={stage} />
      <Header />
      <div className={cl.page_content}>
        <SuccessField onStartGame={startGame} />
        <Gamepad />
      </div>
      <Footer />
    </div>
  );
};
