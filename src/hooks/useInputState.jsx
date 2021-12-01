import { useReducer } from "react";
const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state,action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { isTouched: true, value: state.value };
  }
  if (action.type === "RESET") {
    return { isTouched: false, value: "" };
  }
  return inputStateReducer;
};

const useInputState = (validate) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const isValid = validate(inputState.value);
  const hasError = !isValid && inputState.isTouched;

  const changeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };
  const blurHandler = (event) => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    isValid,
    hasError,
    changeHandler,
    blurHandler,
    reset,
  };
};
export default useInputState;
