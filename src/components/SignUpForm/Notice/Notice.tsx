import { FC } from "react";
import "./Notice.css";

interface Props {
  text: string;
  type: "notification" | "success" | "error";

  closeNotification: () => void;
}

const Notice: FC<Props> = ({ text, type, closeNotification }) => {
  return (
    <div className={`notice ${type}`}>
      <p>{text}</p>
      <button className="close-button" onClick={() => closeNotification()}>
        ✕
      </button>
    </div>
  );
};

export default Notice;
