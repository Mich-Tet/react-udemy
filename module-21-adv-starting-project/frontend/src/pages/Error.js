import React from 'react';
import PageContent from './PageContent';
import MainNavigation from '../components/MainNavigation';
import { useRouteError } from 'react-router-dom';
const Error = () => {
  const error = useRouteError();

  let title = 'An error occured';
  let message = 'Something went wrong';

  if (error.status === 500) {
    message = error.data.message;
  }
  if (error.status === 404) {
    title = 'Not found';
    message = 'Could not find resource or page';
  }

  return (
    <div>
      <MainNavigation></MainNavigation>
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </div>
  );
};

export default Error;
