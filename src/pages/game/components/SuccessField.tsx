import { SuccessItem } from "./SuccessItem";
import cl from "./styles.module.css";

type Props = {
  rows: number;
  level: number;
  score: number;
  gameOver: boolean;
  onStartGame: () => void;
};

export const SuccessField = ({
  rows,
  level,
  score,
  gameOver,
  onStartGame,
}: Props) => {
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
      <div className={cl.start_game_btn} onClick={onStartGame}>
        Start Game
      </div>
    </div>
  );
};
