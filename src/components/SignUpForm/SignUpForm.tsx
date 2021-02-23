import { FC } from "react";
import { useForm } from "react-hook-form";

import ContactInfoFieldset from "./ContactInfoFieldset/ContactInfoFieldset";
import TopicFieldset from "./TopicFieldset/TopicFieldset";
import ConfirmationFieldset from "./ConfirmationFieldset/ConfirmationFieldset";

import "./SignUpForm.css";
import Submit from "./Submit/Submit";

interface Props {}

const SignUpForm: FC<Props> = () => {
  const form = useForm({ mode: "onChange" });
  const { handleSubmit } = form;

  const submit = (d: any) => console.log(d);

  return (
    <form id="sign-up-form" onSubmit={handleSubmit(submit)}>
      <div>
        <h1>Subscribe to our newsletter</h1>
        <p>Get all the deals when they first appear.</p>
      </div>
      <ContactInfoFieldset form={form} />
      <TopicFieldset form={form} />
      <ConfirmationFieldset form={form} />
      <Submit form={form} />
    </form>
  );
};

export default SignUpForm;
