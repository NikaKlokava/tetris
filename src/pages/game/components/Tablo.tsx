import cl from "./styles.module.css";
import { memo } from "react";

type Props = {
  rows: number;
  level: number;
  score: number;
  gameOver: boolean;
};

export const Tablo = memo(({ rows, level, score, gameOver }: Props) => {
  return (
    <div className={cl.tablo}>
      {gameOver ? (
        <div className={cl.game_over}>Game Over!</div>
      ) : (
        <>
          <div className={cl.tablo_item}>{`Score : ${score}`}</div>
          <div className={cl.tablo_item}>{`Rows : ${rows}`}</div>
          <div className={cl.tablo_item}>{`Level : ${level}`}</div>
        </>
      )}
    </div>
  );
});
