import { memo } from "react";
import cl from "../tetris.module.css";

type Props = {
  onPress: () => void;
};

export const StartGameBtn = memo(({ onPress }: Props) => {
  return (
    <button className={cl.start_game_btn} onClick={onPress}>
      Start Game
    </button>
  );
});
