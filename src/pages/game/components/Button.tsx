import { memo } from "react";
import cl from "./styles.module.css";

type Props = {
  text: string;
  onPress: () => void;
};

export const Button = memo(({ onPress, text }: Props) => {
  console.log("btn");
  return (
    <button className={cl.game_btn} onClick={onPress}>
      {text}
    </button>
  );
});
