import { FC } from "react";
import "./Error.css";

interface Props {
  message: string;
}

const Error: FC<Props> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="form-error">
      <p>{message}</p>
    </div>
  );
};

export default Error;
