import cl from "./styles.module.css";

type Props = {
  type: string;
};

export const Cell = ({ type }: Props) => {
  return <div className={cl.cell} style={{ backgroundColor: `${type}` }}></div>;
};
