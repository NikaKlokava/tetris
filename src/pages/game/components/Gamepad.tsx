import { GamepadBtn } from "./GamepadBtn";
import cl from "./styles.module.css";

export const Gamepad = () => {
  return (
    <div className={cl.gamepad_wrapper}>
      <div className={cl.move_buttons}>
        <GamepadBtn type={"left"} />
        <GamepadBtn type={"right"} />
        <GamepadBtn type={"down"} />
      </div>
      <div className={cl.rotate_button}>
        <GamepadBtn type={"rotate"} />
      </div>
    </div>
  );
};
