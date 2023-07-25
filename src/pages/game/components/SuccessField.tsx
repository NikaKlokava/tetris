import { SuccessItem } from "./SuccessItem";
import cl from "./styles.module.css";

export const SuccessField = () => {
  return (
    <div className={cl.success_field}>
      <SuccessItem text={`Score :`} />
      <SuccessItem text={`Rows :`} />
      <SuccessItem text={`Level :`} />
      <div className={cl.start_game_btn}>Start Game</div>
    </div>
  );
};
