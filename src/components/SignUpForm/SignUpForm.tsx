import { FC, useState } from "react";
import { useForm } from "react-hook-form";

import ContactInfoFieldset from "./ContactInfoFieldset/ContactInfoFieldset";
import TopicFieldset, { Topic } from "./TopicFieldset/TopicFieldset";
import ConfirmationFieldset from "./ConfirmationFieldset/ConfirmationFieldset";

import "./SignUpForm.css";
import Submit from "./Submit/Submit";
import Notice from "./Notice/Notice";

interface Props {}

const topics: Topic[] = [
  { text: "Sales and offers", value: "salesAndOffers" },
  { text: "News", value: "news" },
  { text: "Podcasts", value: "podcasts" },
];

const SignUpForm: FC<Props> = () => {
  const form = useForm({ mode: "onChange" });
  const { handleSubmit, formState } = form;

  const [showNotification, setShowNotification] = useState(true);
  const [notificationText, setNotificationText] = useState("Success");

  const submit = (d: any) => {
    setShowNotification(true);
    setNotificationText(`${d.email} is now subscribed to our newsletter.`);
    form.reset();
  };

  return (
    <>
      <form id="sign-up-form" onSubmit={handleSubmit(submit)}>
        <div id="sign-up-form-title">
          <h1>Subscribe to our newsletter</h1>
          <p>Keep up to date with what's going on at F-Secure</p>
        </div>
        <ContactInfoFieldset form={form} />
        <TopicFieldset form={form} topics={topics} />
        <ConfirmationFieldset form={form} />
        <Submit form={form} />
        {showNotification ? (
          <Notice
            text={notificationText}
            type={formState.isSubmitSuccessful ? "success" : "error"}
            closeNotification={() => setShowNotification(false)}
          />
        ) : null}
      </form>
    </>
  );
};

export default SignUpForm;
