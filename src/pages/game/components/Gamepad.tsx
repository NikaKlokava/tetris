import { memo } from "react";
import classnames from "classnames";
import cl from "./styles.module.css";
import Emitter from "../../../shared/emitter/EventEmitter";

export const Gamepad = memo(() => {
  const handleBtnClick = (type: ButtonTypes) => {
    Emitter.emit(type);
  };
  return (
    <div className={cl.gamepad_wrapper}>
      <div className={cl.move_buttons}>
        <button
          className={classnames(cl.gamepad_btn, cl.btn_left)}
          onClick={() => handleBtnClick("left")}
        ></button>
        <button
          className={classnames(cl.gamepad_btn, cl.btn_right)}
          onClick={() => handleBtnClick("right")}
        ></button>
        <button
          className={classnames(cl.gamepad_btn, cl.btn_down)}
          onClick={() => handleBtnClick("down")}
        ></button>
      </div>
      <div className={cl.rotate_button}>
        <button
          className={classnames(cl.gamepad_btn, cl.btn_rotate)}
          onClick={() => handleBtnClick("rotate")}
        ></button>
      </div>
    </div>
  );
});
