import { SuccessItem } from "./SuccessItem";
import cl from "./styles.module.css";

type Props = {
  completedRow: number;
  onStartGame: () => void;
};

export const SuccessField = ({ completedRow, onStartGame }: Props) => {
  return (
    <div className={cl.success_field}>
      <SuccessItem text={`Score :`} />
      <SuccessItem text={`Rows : ${completedRow}`} />
      <SuccessItem text={`Level :`} />
      <div className={cl.start_game_btn} onClick={onStartGame}>
        Start Game
      </div>
    </div>
  );
};
