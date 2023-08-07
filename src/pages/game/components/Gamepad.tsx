import { Component, memo, ReactNode } from "react";
import { GamepadBtn } from "./GamepadBtn";
import cl from "./styles.module.css";

type Props = {
  drop: () => void;
  move: (dir: -1 | 1) => void;
  rotate: () => void;
  up: () => void;
};

// export class Gamepad extends Component<Props> {
//   shouldComponentUpdate(nextProps: Readonly<Props>): boolean {
//     return false;
//   }

//   render(): ReactNode {
//     return (
//       <div className={cl.gamepad_wrapper}>
//         <div className={cl.move_buttons}>
//           <GamepadBtn type={"left"} onPress={() => this.props.move(-1)} />
//           <GamepadBtn type={"right"} onPress={() => this.props.move(1)} />
//           <GamepadBtn
//             type={"down"}
//             onPress={() => this.props.drop()}
//             onMouseUp={() => this.props.up()}
//           />
//         </div>
//         <div className={cl.rotate_button}>
//           <GamepadBtn type={"rotate"} onPress={() => this.props.rotate()} />
//         </div>
//       </div>
//     );
//   }
// }

export const Gamepad = memo(({ drop, move, rotate, up }: Props) => {
  console.log('render gamepad')
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
});
