import React from 'react';
import EventForm from '../components/EventForm';
// import { json, redirect } from 'react-router-dom';
const NewEventPage = () => {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>New event!</h1>
      <EventForm method='post' />
    </>
  );
};

export default NewEventPage;
