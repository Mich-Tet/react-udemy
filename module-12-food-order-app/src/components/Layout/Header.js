import React from 'react';
import meals from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCardButton from './HeaderCardButton';
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCardButton onClick={props.onShowCart}></HeaderCardButton>
      </header>
      <div className={classes['main-image']}>
        <img
          src={meals}
          alt='Meals on a table'
        />
      </div>
    </>
  );
};

export default Header;
