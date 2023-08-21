import { memo } from "react";
import cl from "./styles.module.css";

type Props = {
  text: string;
  testId?: string;
  onPress: () => void;
};

export const Button = memo(({ onPress, text, testId }: Props) => {
  return (
    <button className={cl.game_btn} onClick={onPress} data-testid={testId}>
      {text}
    </button>
  );
});
