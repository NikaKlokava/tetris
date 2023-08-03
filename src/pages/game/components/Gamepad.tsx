import { GamepadBtn } from "./GamepadBtn";
import cl from "./styles.module.css";

type Props = {
  drop: () => void;
  move: (dir: -1 | 1) => void;
  rotate: () => void;
  up: () => void;
};

export const Gamepad = ({ drop, move, rotate, up }: Props) => {
  return (
    <div className={cl.gamepad_wrapper}>
      <div className={cl.move_buttons}>
        <GamepadBtn type={"left"} onPress={() => move(-1)} />
        <GamepadBtn type={"right"} onPress={() => move(1)} />
        <GamepadBtn type={"down"} onPress={drop} onMouseUp={up} />
      </div>
      <div className={cl.rotate_button}>
        <GamepadBtn type={"rotate"} onPress={rotate} />
      </div>
    </div>
  );
};
