import { useState } from "react";

const useInput = (validation) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValueValid = validation(enteredValue);
  const hasError = !isValueValid && isTouched;

  const inputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    setIsTouched(true);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };
  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: isValueValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
};
export default useInput;
