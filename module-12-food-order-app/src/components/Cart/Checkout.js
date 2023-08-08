import classes from './Checkout.module.css';
import { useRef, useState } from 'react';

const isEmpty = (value) => value.trim().length === 0;
const isFiveChars = (value) => value.trim().length === 5;
const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  });
  const [formInputsTouched, setFormInputsTouched] = useState({
    name: false,
    street: false,
    postal: false,
    city: false,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const nameBlur = () => {
    if (!nameInputRef.current.value) {
      setFormInputsTouched((prevState) => ({
        ...prevState,
        name: true,
      }));
    }
  };
  const nameInputChange = () => {
    setFormInputsTouched((prevState) => ({
      ...prevState,
      name: false,
    }));
  };
  const streetBlur = () => {
    if (!streetInputRef.current.value) {
      setFormInputsTouched((prevState) => ({
        ...prevState,
        street: true,
      }));
    }
  };
  const streetInputChange = () => {
    setFormInputsTouched((prevState) => ({
      ...prevState,
      street: false,
    }));
  };
  const postalBlur = () => {
    if (!postalInputRef.current.value) {
      setFormInputsTouched((prevState) => ({
        ...prevState,
        postal: true,
      }));
    }
  };
  const postalInputChange = () => {
    setFormInputsTouched((prevState) => ({
      ...prevState,
      postal: false,
    }));
  };
  const cityBlur = () => {
    if (!cityInputRef.current.value) {
      setFormInputsTouched((prevState) => ({
        ...prevState,
        city: true,
      }));
    }
  };
  const cityInputChange = () => {
    setFormInputsTouched((prevState) => ({
      ...prevState,
      city: false,
    }));
  };

  const submitOrderHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalIsValid = isFiveChars(enteredPostal);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postal: enteredPostalIsValid,
      city: enteredCityIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalIsValid &&
      enteredCityIsValid;

    if (!formIsValid) {
      setFormInputsTouched({
        name: false,
        street: false,
        postal: false,
        city: false,
      });
      return;
    }
    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      postal: enteredPostal,
      city: enteredCity,
    });
  };
  const nameValidity = formInputsValidity.name && !formInputsTouched.name;
  const streetValidity = formInputsValidity.street && !formInputsTouched.street;
  const postalValidity = formInputsValidity.postal && !formInputsTouched.postal;
  const cityValidity = formInputsValidity.city && !formInputsTouched.city;
  const nameControlClasses = `${classes.control} ${
    nameValidity ? '' : classes.invalid
  }`;
  const streetControlClasses = `${classes.control} ${
    streetValidity ? '' : classes.invalid
  }`;
  const postalCodeControlClasses = `${classes.control} ${
    postalValidity ? '' : classes.invalid
  }`;
  const cityControlClasses = `${classes.control} ${
    cityValidity ? '' : classes.invalid
  }`;
  return (
    <form
      className={classes.form}
      onSubmit={submitOrderHandler}
    >
      <div className={nameControlClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          ref={nameInputRef}
          onBlur={nameBlur}
          onChange={nameInputChange}
        />
        {!nameValidity && <p>Please enter a valid name!</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor='street'>Street</label>
        <input
          type='text'
          id='street'
          ref={streetInputRef}
          onBlur={streetBlur}
          onChange={streetInputChange}
        />
        {!streetValidity && <p>Please enter a valid street!</p>}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor='postal'>Postal Code</label>
        <input
          type='text'
          id='postal'
          ref={postalInputRef}
          onBlur={postalBlur}
          onChange={postalInputChange}
        />
        {!postalValidity && <p>Please enter a valid postal code!</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor='city'>City</label>
        <input
          type='text'
          id='city'
          ref={cityInputRef}
          onBlur={cityBlur}
          onChange={cityInputChange}
        />
        {!cityValidity && <p>Please enter a valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button
          type='button'
          onClick={props.onCancel}
        >
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
