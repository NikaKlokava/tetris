import { Gamepad, GameField, SuccessField } from "./components";
import cl from "./tetris.module.css";

export const Tetris = () => {
  return (
    <div className={cl.tetris_wrapper}>
      <GameField />
      <SuccessField />
      <Gamepad />
    </div>
  );
};
