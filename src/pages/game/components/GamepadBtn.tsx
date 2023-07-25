import classnames from "classnames";
import cl from "./styles.module.css";

type Props = {
  type: string;
};
export const GamepadBtn = ({ type }: Props) => {
  return <div className={classnames(cl.gamepad_btn, cl[`btn_${type}`])}></div>;
};
