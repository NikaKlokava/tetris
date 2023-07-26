import { Cell } from "./Cell";
import cl from "./styles.module.css";

type Props = {
  stage: FieldData;
};
export const GameField = ({ stage }: Props) => {
  return (
    <div className={cl.game_field_wrapper}>
      {stage.map((row) =>
        row.map((cell, i) => <Cell key={i} type={cell[0]} />)
      )}
    </div>
  );
};
