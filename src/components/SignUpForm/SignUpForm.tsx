import { FC } from "react";
import { useForm } from "react-hook-form";

import ContactInfoFieldset from "./ContactInfoFieldset/ContactInfoFieldset";
import TopicFieldset, { Topic } from "./TopicFieldset/TopicFieldset";
import ConfirmationFieldset from "./ConfirmationFieldset/ConfirmationFieldset";

import "./SignUpForm.css";
import Submit from "./Submit/Submit";

interface Props {}

const topics: Topic[] = [
  { text: "Sales and offers", value: "salesAndOffers" },
  { text: "News", value: "news" },
  { text: "Podcasts", value: "podcasts" },
];

const SignUpForm: FC<Props> = () => {
  const form = useForm({ mode: "onChange" });
  const { handleSubmit } = form;

  const submit = (d: any) => console.log(d);

  return (
    <form id="sign-up-form" onSubmit={handleSubmit(submit)}>
      <div id="sign-up-form-title">
        <h1>Subscribe to our newsletter</h1>
        <p>Keep up to date with what's going on at F-Secure</p>
      </div>
      <ContactInfoFieldset form={form} />
      <TopicFieldset form={form} topics={topics} />
      <ConfirmationFieldset form={form} />
      <Submit form={form} />
    </form>
  );
};

export default SignUpForm;
