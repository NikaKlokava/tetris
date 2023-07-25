import { Footer } from "../../shared/components/footer";
import { Header } from "../../shared/components/header";
import { Gamepad, GameField, SuccessField } from "./components";
import cl from "./tetris.module.css";

export const Tetris = () => {
  return (
    <div className={cl.tetris_wrapper}>
      <Header />
      <div className={cl.tetris_content}>
        <GameField />
        <SuccessField />
        <Gamepad />
      </div>
      <Footer />
    </div>
  );
};
