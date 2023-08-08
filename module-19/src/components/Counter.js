import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
//imports for Class
// import { connect } from 'react-redux';
// import { Component } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
const Counter = () => {
  const [disabled, setDisabled] = useState(true);
  const numberValue = useRef();
  const isDisabled = () => {
    if (numberValue.current.value === '') {
      setDisabled(true);
    } else if (numberValue.current.value !== '') {
      setDisabled(false);
    }
  };
  const dispatch = useDispatch();
  const incrementHandler = () => dispatch({ type: 'increment' });
  const increaseHandler = () =>
    dispatch({ type: 'increase', amount: parseInt(numberValue.current.value) });
  const decrementHandler = () => dispatch({ type: 'decrement' });
  const toggleCounterHandler = () => {
    dispatch({ type: 'toggle' });
  };

  const counter = useSelector((state) => state.counter);
  const toggle = useSelector((state) => state.showCounter);
  const resetHandler = () => dispatch({ type: 'reset' });
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle && <div className={classes.value}>{counter}</div>}
      <label htmlFor='numbertoincrease'></label>
      <input
        type='number'
        id='numbertoincrease'
        ref={numberValue}
        onChange={isDisabled}
      />
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button
          style={{ backgroundColor: `${disabled ? 'red' : ''}` }}
          onClick={increaseHandler}
          disabled={disabled}
        >
          Increment by input
        </button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={resetHandler}>Reset</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }
//   decrementHandler() {
//     this.props.decrement();
//   }
//   toggleCounterHandler() {}
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }
// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => {
//       dispatch({ type: 'increment' });
//     },
//     decrement: () => {
//       dispatch({ type: 'decrement' });
//     },
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default Counter;
