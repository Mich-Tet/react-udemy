import React from 'react';
import classes from './MeetupDetail.module.css';
const MeetupDetail = (props) => {
  return (
    <>
      <h1 className={classes.title}>{props.title}</h1>
      <img
        className={classes.image}
        src={props.image}
        alt={props.title}
      />
      <address className={classes.address}>{props.address}</address>
      <p className={classes.description}>{props.description}</p>
    </>
  );
};

export default MeetupDetail;
