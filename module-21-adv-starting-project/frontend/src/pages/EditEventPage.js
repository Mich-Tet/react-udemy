import React from 'react';
import EventForm from '../components/EventForm';
// import { useLoaderData } from 'react-router-dom';
import { useRouteLoaderData } from 'react-router-dom';
import classes from '../components/EventForm.module.css';
const EditEventPage = () => {
  // const data = useLoaderData();
  const data = useRouteLoaderData('event-detail');

  return (
    <>
      <h1 className={classes.animatedText}>Editing "{data.event.title}" ...</h1>
      <EventForm
        event={data.event}
        method='patch'
      />
    </>
  );
};

export default EditEventPage;
