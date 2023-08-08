import useInput from '../hooks/input-hook';

const BasicForm = (props) => {
  const {
    value: nameInput,
    isValid: nameInputIsValid,
    valueInputIsInvalid: nameInputIsInvalid,
    valueInputHandler: nameInputHandler,
    valueInputLostBlurHandler: nameInputLostBlurHandler,
    reset: nameReset,
  } = useInput((value) => value.trim() !== '');
  const {
    value: lastInput,
    isValid: lastInputIsValid,
    valueInputIsInvalid: lastInputIsInvalid,
    valueInputHandler: lastInputHandler,
    valueInputLostBlurHandler: lastInputLostBlurHandler,
    reset: lastReset,
  } = useInput((value) => value.trim() !== '');
  const {
    value: emailInput,
    isValid: emailInputIsValid,
    valueInputIsInvalid: emailInputIsInvalid,
    valueInputHandler: emailInputHandler,
    valueInputLostBlurHandler: emailInputLostBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.trim() !== '' && value.includes('@'));

  let formIsValid = false;

  if (emailInputIsValid && lastInputIsValid && nameInputIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }
    console.log(nameInput);
    nameReset();
    lastReset();
    emailReset();
  };

  const nameInputClasses = nameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';
  const lastInputClasses = lastInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';
  const emailInputClasses = emailInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className={nameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input
            onChange={nameInputHandler}
            type='text'
            id='name'
            value={nameInput}
            onBlur={nameInputLostBlurHandler}
          />
          {nameInputIsInvalid && (
            <p style={{ color: 'red' }}>Please enter the name</p>
          )}
        </div>
        <div className={lastInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input
            onChange={lastInputHandler}
            type='text'
            id='name'
            value={lastInput}
            onBlur={lastInputLostBlurHandler}
          />
          {lastInputIsInvalid && (
            <p style={{ color: 'red' }}>Please enter the last name</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          onChange={emailInputHandler}
          type='text'
          id='name'
          value={emailInput}
          onBlur={emailInputLostBlurHandler}
        />
        {emailInputIsInvalid && (
          <p style={{ color: 'red' }}>Please enter the email</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
