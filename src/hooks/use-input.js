import { useState } from "react";

const useInput=(validate)=>{
  const [enteredValue,setEntered]=useState('');
  const [inputTouched,setInputTouched]=useState(false);

  const isValid=validate(enteredValue);
  const hasError=!isValid && inputTouched;

  const changeHandler=(event)=>{
    setEntered(event.target.value);
  }
  const blurHandler=(event)=>{
    setInputTouched(true);
  }

  const reset=()=>{
    setEntered('');
    setInputTouched(false);
  }

  return{
    value:enteredValue,
    isValid,
    hasError,
    changeHandler,
    blurHandler,
    reset,
  }
}
export default useInput;