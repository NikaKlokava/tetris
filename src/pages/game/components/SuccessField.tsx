import { SuccessItem } from "./SuccessItem";
import cl from "./styles.module.css";

export const SuccessField = () => {
  return (
    <div className={cl.success_field}>
      <SuccessItem />
      <SuccessItem />
      <SuccessItem />
    </div>
  );
};
