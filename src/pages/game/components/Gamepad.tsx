import { memo } from "react";
import classnames from "classnames";
import cl from "./styles.module.css";

type Props = {
  drop: () => void;
  move: (dir: -1 | 1) => void;
  rotate: () => void;
  up?: () => void;
};

export const Gamepad = memo(({ drop, move, rotate, up }: Props) => {
  return (
    <div className={cl.gamepad_wrapper}>
      <div className={cl.move_buttons}>
        <button
          className={classnames(cl.gamepad_btn, cl.btn_left)}
          onClick={() => move(-1)}
        ></button>
        <button
          className={classnames(cl.gamepad_btn, cl.btn_right)}
          onClick={() => move(1)}
        ></button>
        <button
          className={classnames(cl.gamepad_btn, cl.btn_down)}
          onMouseDown={drop}
          onMouseUp={up}
        ></button>
      </div>
      <div className={cl.rotate_button}>
        <button
          className={classnames(cl.gamepad_btn, cl.btn_left)}
          onClick={rotate}
        ></button>
      </div>
    </div>
  );
});
