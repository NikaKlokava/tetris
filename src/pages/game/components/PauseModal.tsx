import { Button } from "./Button";
import cl from "./styles.module.css";

type Props = {
  onPlay: () => void;
};

export const PauseModal = ({ onPlay }: Props) => {
  return (
    <div className={cl.modal_wrapper}>
      <div className={cl.modal_container}>
        <Button text="Resume" onPress={onPlay} />
      </div>
    </div>
  );
};
