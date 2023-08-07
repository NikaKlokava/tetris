import { Button } from "./Button";
import cl from "./styles.module.css";

type Props = {
  onPlay: () => void;
};

export const PauseModal = ({ onPlay }: Props) => {
  return (
    <div className={cl.modal_wrapper}>
      <div className={cl.modal_container}>
        <div className={cl.modal_title}>Pause</div>
        {/* <div className={cl.pause_icon}></div> */}
        <Button text="Play" onPress={onPlay} />
      </div>
    </div>
  );
};
