import { Footer } from "../../shared/components/footer";
import { Header } from "../../shared/components/header";
import { GameContent } from "./components";
import cl from "./tetris.module.css";

export const Tetris = () => {
  return (
    <div className={cl.tetris_wrapper} role="button" tabIndex={0}>
      <Header />
      <GameContent />
      <Footer />
    </div>
  );
};
