import classnames from "classnames";
import { memo } from "react";
import cl from "./styles.module.css";

type Props = {
  type: string;
  onPress: () => void;
  onMouseUp?: () => void;
};
export const GamepadBtn = memo(({ type, onPress, onMouseUp }: Props) => {
  // console.log("render gamepad btn");
  return (
    <div
      className={classnames(cl.gamepad_btn, cl[`btn_${type}`])}
      onMouseDown={onPress}
      onMouseUp={onMouseUp}
    ></div>
  );
});
