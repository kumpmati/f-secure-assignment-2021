import { FC } from "react";
import { UseFormMethods } from "react-hook-form";
import "./ConfirmationFieldset.css";

interface Props {
  form: UseFormMethods<Record<string, any>>;
}

const ConfirmationFieldset: FC<Props> = ({ form }) => {
  const { register } = form;

  return (
    <fieldset id="confirmation-fieldset">
      <legend>Confirmation</legend>
      <div>
        <input
          ref={register({ required: true })}
          type="checkbox"
          name="termsOfUse"
          id="terms-of-use"
          className="checkbox"
        />
        <label htmlFor="terms-of-use">I agree to the terms of use.</label>
      </div>
      <div>
        <input
          ref={register({ required: true })}
          type="checkbox"
          name="privacyPolicy"
          id="privacy-policy"
          className="checkbox"
        />
        <label htmlFor="privacy-policy">
          I have read and accept the privacy policy.
        </label>
      </div>
    </fieldset>
  );
};

export default ConfirmationFieldset;
