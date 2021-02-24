import { FC } from "react";
import { UseFormMethods } from "react-hook-form";
import "./TopicFieldset.css";

interface Props {
  form: UseFormMethods<Record<string, any>>;
}

interface Topic {
  text: string;
  value: string;
}

const TopicFieldset: FC<Props> = ({ form }) => {
  const { register } = form;

  const topics: Topic[] = [
    { text: "Sales and offers", value: "valueA" },
    { text: "Newsletter", value: "valueB" },
    { text: "New content", value: "valueC" },
  ];

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
                  ref={register}
                  type="checkbox"
                  className="checkbox"
                  id={name}
                  name={name}
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
