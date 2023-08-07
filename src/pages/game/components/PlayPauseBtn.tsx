import { memo } from "react";
import cl from "./styles.module.css";

type Props = {
  text: string;
  onPress: () => void;
};

export const PlayPauseBtn = memo(({ onPress, text }: Props) => {
  return (
    <button className={cl.game_btn} onClick={onPress}>
      {text}
    </button>
  );
});
