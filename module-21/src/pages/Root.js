import React from 'react';
import MainNavigation from '../components/MainNavigation';
import { Outlet } from 'react-router-dom';
const Root = () => {
  return (
    <div>
      <MainNavigation></MainNavigation>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default Root;
