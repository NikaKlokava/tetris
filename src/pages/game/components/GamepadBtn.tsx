import classnames from "classnames";
import cl from "./styles.module.css";

type Props = {
  type: string;
  onPress: () => void;
  onMouseUp?: () => void;
};
export const GamepadBtn = ({ type, onPress, onMouseUp }: Props) => {
  return (
    <div
      className={classnames(cl.gamepad_btn, cl[`btn_${type}`])}
      onMouseDown={onPress}
      onMouseUp={onMouseUp}
    ></div>
  );
};
