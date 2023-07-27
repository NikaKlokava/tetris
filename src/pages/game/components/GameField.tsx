import { Cell } from "./Cell";
import { isEqual } from "lodash";
import cl from "./styles.module.css";

type Props = {
  stage: FieldData;
};
export const GameField = ({ stage }: Props) => {
  return (
    <div className={cl.game_field_wrapper}>
      {stage.map((row, y) => {
        if (isEqual(y, 20)) return null;
        return row.map((cell, i) => {
          if (isEqual(i, 0) || isEqual(i, 13)) return null;
          return <Cell key={i} type={cell[1]} />;
        });
      })}
    </div>
  );
};
