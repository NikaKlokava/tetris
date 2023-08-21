import { memo } from "react";
import classnames from "classnames";
import cl from "./styles.module.css";
import Emitter from "../../../shared/emitter/EventEmitter";

export const Gamepad = memo(() => {
  const handleLeftClick = (keyCode: GamepadTypes) => {
    Emitter.emit("gamepadPress", { key: keyCode });
  };
  return (
    <div className={cl.gamepad_wrapper}>
      <div className={cl.move_buttons}>
        <button
          className={classnames(cl.gamepad_btn, cl.btn_left)}
          onClick={() => handleLeftClick("ArrowLeft")}
          data-testid={"gamepad-btn"}
        ></button>
        <button
          className={classnames(cl.gamepad_btn, cl.btn_right)}
          onClick={() => handleLeftClick("ArrowRight")}
          data-testid={"gamepad-btn"}
        ></button>
        <button
          className={classnames(cl.gamepad_btn, cl.btn_down)}
          onClick={() => handleLeftClick("ArrowDown")}
          data-testid={"gamepad-btn"}
        ></button>
      </div>
      <div className={cl.rotate_button}>
        <button
          className={classnames(cl.gamepad_btn, cl.btn_rotate)}
          onClick={() => handleLeftClick("ArrowUp")}
          data-testid={"gamepad-btn"}
        ></button>
      </div>
    </div>
  );
});
