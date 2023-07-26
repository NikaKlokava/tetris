import { useEffect, useState } from "react";
import {
  createGameField,
  FIELD_HEIGHT,
  FIELD_WIDTH,
} from "../../../shared/utils/utils";
import { Cell } from "./Cell";
import cl from "./styles.module.css";

export const GameField = () => {
  const [field, setField] = useState<FieldData>();

  useEffect(() => {
    const arr = createGameField();
    setField(arr);
  }, []);

  return (
    <div
      className={cl.game_field_wrapper}
      style={{
        gridTemplateColumns: `repeat(${FIELD_WIDTH}, 25px)`,
        gridTemplateRows: `repeat(${FIELD_HEIGHT}, 25px)`,
      }}
    >
      {field?.map((row) => row.map((_, i) => <Cell key={i} />))}
    </div>
  );
};
