import { memo } from "react";
import cl from "./styles.module.css";

type Props = {
  type: FigureColors;
};

export const Cell = memo(({ type }: Props) => {
  return <div className={cl.cell} style={{ backgroundColor: `${type}` }}></div>;
});
