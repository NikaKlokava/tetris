import { Cell } from "./Cell";
import cl from "./styles.module.css";
import { memo } from "react";

type Props = {
  stage: FieldData;
};
export const GameField = memo(({ stage }: Props) => {
  return (
    <div className={cl.game_field_wrapper}>
      {stage.slice(0, -1).map((row, y) => {
        return row.slice(1, -1).map((cell, i) => {
          return <Cell key={i} type={cell[1]} />;
        });
      })}
    </div>
  );
});
