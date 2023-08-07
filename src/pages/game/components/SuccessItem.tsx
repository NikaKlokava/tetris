import { memo } from "react";
import cl from "./styles.module.css";

type Props = {
  text: string;
};
export const SuccessItem = memo(({ text }: Props) => {
  return <div className={cl.success_item}>{text}</div>;
});
