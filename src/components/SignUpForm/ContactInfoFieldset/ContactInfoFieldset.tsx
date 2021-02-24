import { FC } from "react";
import { UseFormMethods } from "react-hook-form";

import "./ContactInfoFieldset.css";

interface Props {
  form: UseFormMethods<Record<string, any>>;
}

const ContactInfoFieldset: FC<Props> = ({ form }) => {
  const { register, errors } = form;

  return (
    <fieldset id="contact-info">
      <legend>Contact Info</legend>

      <div id="name-fieldset">
        <div className="form-field first-name">
          <label htmlFor="fname">First name *</label>
          <input
            ref={register({ required: true, maxLength: 30 })}
            type="text"
            id="fname"
            className="textfield"
            name="firstName"
            placeholder="John"
            aria-invalid={errors.firstName ? "true" : "false"}
          />
        </div>

        <div className="form-field last-name">
          <label htmlFor="lname">Last name *</label>
          <input
            ref={register({ required: true, maxLength: 40 })}
            type="text"
            id="lname"
            className="textfield"
            name="lastName"
            placeholder="Doe"
            aria-invalid={errors.lastName ? "true" : "false"}
          />
        </div>
      </div>
      <div id="email-fieldset" className="form-field">
        <label htmlFor="email">Email *</label>
        <input
          ref={register({ required: true })}
          type="email"
          id="email"
          className="textfield"
          name="email"
          placeholder="hello@example.com"
          aria-invalid={errors.email ? "true" : "false"}
          onInvalid={console.log}
        />
      </div>
    </fieldset>
  );
};

export default ContactInfoFieldset;
