import { GamepadBtn } from "./GamepadBtn";
import cl from "./styles.module.css";

export const Gamepad = () => {
  return (
    <div className={cl.gamepad_wrapper}>
      <GamepadBtn />
      <GamepadBtn />
      <GamepadBtn />
      <GamepadBtn />
    </div>
  );
};
