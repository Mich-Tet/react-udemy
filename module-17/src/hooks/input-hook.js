import { useState } from 'react';

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [enteredValueTouched, setEnteredValueTouched] = useState(false);
  const enteredValueIsValid = validateValue(enteredValue);
  const valueInputIsInvalid = !enteredValueIsValid && enteredValueTouched;

  const valueInputHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const valueInputLostBlurHandler = (event) => {
    setEnteredValueTouched(true);
  };

  const reset = () => {
    setEnteredValue('');
    setEnteredValueTouched(false);
  };
  return {
    value: enteredValue,
    isValid: enteredValueIsValid,
    valueInputIsInvalid,
    valueInputHandler,
    valueInputLostBlurHandler,
    reset,
  };
};

export default useInput;
