import React from 'react';
import EventsNavigation from '../components/EventsNavigation';
import { Outlet } from 'react-router-dom';
const EventLayout = () => {
  return (
    <div>
      <EventsNavigation></EventsNavigation>
      <Outlet></Outlet>
    </div>
  );
};

export default EventLayout;
