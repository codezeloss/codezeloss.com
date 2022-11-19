import useInput from "/hooks/use-input";
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mzbwwzkl");

  // Name input
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput((value) => value.trim() !== "");

  // Email input
  const validRegex = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.match(validRegex));

  // Message input
  const {
    value: enteredMessage,
    isValid: enteredMessageIsValid,
    hasError: messageHasError,
    valueChangeHandler: messageChangeHandler,
    valueBlurHandler: messageBlurHandler,
    reset: messageReset,
  } = useInput((value) => value.trim() !== "");

  // form validation && submission
  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid && enteredMessageIsValid) {
    formIsValid = true;
  }

  // const formSubmissionHandler = (e) => {
  //   e.preventDefault();

  //   if (!enteredNameIsValid && !enteredEmailIsValid && !enteredMessageIsValid) {
  //     return;
  //   }

  //   nameReset("");
  //   emailReset("");
  //   messageReset("");
  // };

  if (!state.succeeded) {
    return <p className="text-5xl mt-30 mr-48">📨</p>;
  }

  return (
    <form
      className="flex flex-col justify-center items-end gap-8"
      onSubmit={handleSubmit}
      action="https://formspree.io/f/mzbwwzkl"
      method="POST"
    >
      <div>
        <input
          className={`inputClass ${nameHasError ? "error-border" : ""} ${
            enteredName ? "valid-border" : ""
          }`}
          type="text"
          placeholder="Name"
          id="name"
          name="name"
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameHasError && <p className="error-message mt-1">Name is required</p>}
        <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
        />
      </div>

      <div>
        <input
          className={`inputClass ${emailHasError ? "error-border" : ""} ${
            enteredEmail ? "valid-border" : ""
          }`}
          type="text"
          placeholder="Email"
          id="email"
          name="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && (
          <p className="error-message mt-1">
            Email is required, enter a valid email
          </p>
        )}
        <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
        />
      </div>

      <div>
        <textarea
          className={`min-h-[117px] inputClass ${messageHasError ? "error-border" : ""} ${
            enteredMessage ? "valid-border" : ""
          }`}
          type="text"
          placeholder="Message"
          id="message"
          name="message"
          value={enteredMessage}
          onChange={messageChangeHandler}
          onBlur={messageBlurHandler}
        />
        {messageHasError && (
          <p className="error-message mt-1">Message is required</p>
        )}
        <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
        />
      </div>

      {/* Submit Button */}
      <button type="submit" disabled={!formIsValid} className="uppercase font-space-grotesk font-bold text-base pb-2.5 border-b-[2px] hover:border-b-[#4EE1A0]">
        Submit Message
      </button>
    </form>
  );
};

export default ContactForm;
