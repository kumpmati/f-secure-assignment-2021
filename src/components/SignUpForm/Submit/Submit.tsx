import { FC } from "react";
import { UseFormMethods } from "react-hook-form";
import "./Submit.css";

interface Props {
  form: UseFormMethods<Record<string, any>>;
}

const Submit: FC<Props> = ({ form }) => {
  const { formState, register } = form;

  console.log("disabled:", !formState.isValid);

  return (
    <div id="submit-container">
      <input
        className="button"
        type="submit"
        value="Subscribe"
        name="subscribe"
        aria-disabled={formState.isValid ? "false" : "true"}
        disabled={!formState.isValid}
        ref={register}
      />
    </div>
  );
};

export default Submit;
