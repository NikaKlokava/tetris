import { TETROMINOES } from "../../../shared/utils/utils";
import cl from "./styles.module.css";

type Props = {
  type: ShapeTypes;
};

export const Cell = ({ type }: Props) => {
  return (
    <div
      className={cl.cell}
      style={{ backgroundColor: `${TETROMINOES[type].color}` }}
    ></div>
  );
};
