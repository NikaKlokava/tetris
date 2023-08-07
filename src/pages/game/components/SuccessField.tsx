import { SuccessItem } from "./SuccessItem";
import cl from "./styles.module.css";
import { memo } from "react";

type Props = {
  rows: number;
  level: number;
  score: number;
  gameOver: boolean;
};

export const SuccessField = memo(({ rows, level, score, gameOver }: Props) => {
  return (
    <div className={cl.success_field}>
      {gameOver ? (
        <div className={cl.game_over}>Game Over!</div>
      ) : (
        <>
          <SuccessItem text={`Score : ${score}`} />
          <SuccessItem text={`Rows : ${rows}`} />
          <SuccessItem text={`Level : ${level}`} />
        </>
      )}
    </div>
  );
});
