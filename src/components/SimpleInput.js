import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameHasError,
    changeHandler: nameChangedHandler,
    blurHandler: NameBlurHandler,
    reset: nameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    changeHandler: emailChangedHandler,
    blurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.trim() !== "");

  let formValid = false;

  if (nameIsValid && emailIsValid) {
    formValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if (!nameIsValid) {
      return;
    }
    console.log(enteredName,enteredEmail);
    nameReset();
    emailReset();
  };

  const nameControl = nameHasError ? "form-control invalid" : "form-control";
  const emailControl = emailHasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className={nameControl}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onBlur={NameBlurHandler}
          value={enteredName}
          onChange={nameChangedHandler}
        />
        {nameHasError && <p className="error-text">please Enter Valid Input</p>}
      </div>
      <div className={emailControl}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          onBlur={emailBlurHandler}
          value={enteredEmail}
          onChange={emailChangedHandler}
        />
        {emailHasError && (
          <p className="error-text">please Enter Valid Input</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
