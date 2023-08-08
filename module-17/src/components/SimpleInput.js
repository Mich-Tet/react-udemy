import useInput from '../hooks/input-hook';
const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    valueInputIsInvalid: nameInputIsInvalid,
    valueInputHandler: nameInputHandler,
    valueInputLostBlurHandler: nameInputLostBlurHandler,
    reset: nameInputReset,
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    valueInputIsInvalid: emailInputIsInvalid,
    valueInputHandler: emailInputHandler,
    valueInputLostBlurHandler: emailInputLostBlurHandler,
    reset: emailInputReset,
  } = useInput((value) => value.trim() !== '' && value.includes('@'));

  let formIsValid = false;

  if (enteredEmailIsValid && enteredNameIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    } else if (!enteredEmailIsValid) {
      return;
    }
    console.log(enteredName);
    console.log(enteredEmail);

    nameInputReset();
    emailInputReset();
  };
  const nameInputClasses = nameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';
  const emailInputClasses = emailInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          onChange={nameInputHandler}
          type='text'
          id='name'
          value={enteredName}
          onBlur={nameInputLostBlurHandler}
        />
        {nameInputIsInvalid && (
          <p style={{ color: 'red' }}>Name input is not valid!</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email Address</label>
        <input
          onChange={emailInputHandler}
          type='text'
          id='email'
          value={enteredEmail}
          onBlur={emailInputLostBlurHandler}
        />
        {emailInputIsInvalid && (
          <p style={{ color: 'red' }}>Email input is not valid!</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
