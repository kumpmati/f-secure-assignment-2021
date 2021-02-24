import { FC } from "react";
import { UseFormMethods } from "react-hook-form";
import "./TopicFieldset.css";

interface Props {
  form: UseFormMethods<Record<string, any>>;
  topics: Topic[];
}

export interface Topic {
  text: string;
  value: string;
}

const TopicFieldset: FC<Props> = ({ form, topics }) => {
  const { register } = form;

  return (
    <fieldset id="topic-fieldset">
      <legend>Topics</legend>

      <ul id="topics">
        {topics &&
          topics.map(topic => {
            const name = `topic-${topic.text}`;
            return (
              <li key={name} className="topic">
                <input
                  ref={register({ validate: v => !!v.length })}
                  type="checkbox"
                  className="checkbox"
                  id={name}
                  name="topics"
                  value={topic.value}
                />
                <label htmlFor={name}>{topic.text}</label>
              </li>
            );
          })}
      </ul>
    </fieldset>
  );
};

export default TopicFieldset;
