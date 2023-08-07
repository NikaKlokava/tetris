import { PlayPauseBtn } from "./PlayPauseBtn";
import cl from "./styles.module.css";

type Props = {
  onPlay: () => void;
};

export const ModalWindow = ({ onPlay }: Props) => {
  return (
    <div className={cl.modal_wrapper}>
      <div className={cl.modal_container}>
        <div className={cl.modal_title}>Pause</div>
        <div className={cl.pause_icon}></div>
        <PlayPauseBtn text="Play" onPress={onPlay} />
      </div>
    </div>
  );
};
