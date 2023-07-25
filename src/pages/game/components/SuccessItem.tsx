import cl from "./styles.module.css";

type Props = {
  text: string;
};
export const SuccessItem = ({ text }: Props) => {
  return <div className={cl.success_item}>{text}</div>;
};
