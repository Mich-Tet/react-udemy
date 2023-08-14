import React from 'react';
import MainNavigation from '../components/MainNavigation';
import { Outlet } from 'react-router-dom';
// import { useNavigation } from 'react-router-dom';
const Layout = () => {
  //   const navigation = useNavigation();

  return (
    <div>
      <MainNavigation></MainNavigation>
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default Layout;
