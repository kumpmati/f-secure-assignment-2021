import { FC } from "react";
import { UseFormMethods } from "react-hook-form";
import "./TopicFieldset.css";

interface Props {
  form: UseFormMethods<Record<string, any>>;
}

const TopicFieldset: FC<Props> = ({ form }) => {
  return (
    <fieldset id="topic-fieldset">
      <legend>Topic</legend>
      <div></div>
    </fieldset>
  );
};

export default TopicFieldset;
