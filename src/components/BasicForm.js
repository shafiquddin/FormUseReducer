import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: enteredFname,
    isValid: fnameIsValid,
    hasError: fnameHasError,
    changeHandler: fnameChangeHandler,
    blurHandler: fnameBlurHandler,
    reset: fnameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLname,
    isValid: lnameIsValid,
    hasError: lnameHasError,
    changeHandler: lnameChangeHandler,
    blurHandler: lnameBlurHandler,
    reset: lnameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    changeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.trim() !== "");

  let formValid = false;
  if (fnameIsValid && lnameIsValid && emailIsValid) {
    formValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if (!formValid) {
      return;
    }
    console.log(enteredFname,enteredLname,enteredEmail);
    fnameReset();
    lnameReset();
    emailReset();
  };

  const fnameContol = fnameHasError ? "form-control invalid" : "form-control";
  const lnameContol = lnameHasError ? "form-control invalid" : "form-control";
  const emailContol = emailHasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className={fnameContol}>
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredFname}
            onBlur={fnameBlurHandler}
            onChange={fnameChangeHandler}
          />
          {fnameHasError && (
            <p className="error-text">Please Enter valid Input</p>
          )}
        </div>
        <div className={lnameContol}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={enteredLname}
            onBlur={lnameBlurHandler}
            onChange={lnameChangeHandler}
          />
          {lnameHasError && (
            <p className="error-text">Please Enter valid Input</p>
          )}
        </div>
      </div>
      <div className={emailContol}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={enteredEmail}
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler}
        />
        {emailHasError && (
          <p className="error-text">Please Enter valid Input</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
