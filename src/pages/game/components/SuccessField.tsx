import { SuccessItem } from "./SuccessItem";
import cl from "./styles.module.css";

type Props = {
  onStartGame: () => void;
};

export const SuccessField = ({ onStartGame }: Props) => {
  return (
    <div className={cl.success_field}>
      <SuccessItem text={`Score :`} />
      <SuccessItem text={`Rows :`} />
      <SuccessItem text={`Level :`} />
      <div className={cl.start_game_btn} onClick={onStartGame}>
        Start Game
      </div>
    </div>
  );
};
