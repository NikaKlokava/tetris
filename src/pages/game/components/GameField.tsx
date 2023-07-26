import { FIELD_HEIGHT, FIELD_WIDTH } from "../../../shared/utils/utils";
import { Cell } from "./Cell";
import cl from "./styles.module.css";

type Props = {
  stage: FieldData;
};
export const GameField = ({ stage }: Props) => {
  return (
    <div
      className={cl.game_field_wrapper}
      style={{
        gridTemplateColumns: `repeat(${FIELD_WIDTH}, 25px)`,
        gridTemplateRows: `repeat(${FIELD_HEIGHT}, 25px)`,
      }}
    >
      {stage.map((row) => row.map((cell, i) => <Cell key={i} type={cell[0]} />))}
    </div>
  );
};
