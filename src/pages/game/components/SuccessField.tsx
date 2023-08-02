import { SuccessItem } from "./SuccessItem";
import cl from "./styles.module.css";

type Props = {
  rows: number;
  level: number;
  score: number;
  onStartGame: () => void;
};

export const SuccessField = ({ rows, level, score, onStartGame }: Props) => {
  return (
    <div className={cl.success_field}>
      <SuccessItem text={`Score : ${score}`} />
      <SuccessItem text={`Rows : ${rows}`} />
      <SuccessItem text={`Level : ${level}`} />
      <div className={cl.start_game_btn} onClick={onStartGame}>
        Start Game
      </div>
    </div>
  );
};
