import React, { useContext, useState } from 'react';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';
// import { PacmanLoader } from 'react-spinners';
// import { RotatingTriangles } from 'react-loader-spinner';
import { Authcontext } from '../Provider/AuthProvider';
import { PacmanLoader } from 'react-spinners';

const Main = () => {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes('signUp');
  const {loading} = useContext(Authcontext)// Set the initial loading state to false

  // Add your logic to trigger the loading state if necessary
  // For example, if you have a button that triggers an action, you can set the loading state to true before the action starts

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
         <PacmanLoader color="#ff8433" loading size={39}  aria-label="Loading Spinner"
        data-testid="loader" />
        </div>
      ) : (
        <div>
          {noHeaderFooter || <Navbar />}
          <Outlet />
          {noHeaderFooter || <Footer />}
        </div>
      )}
    </div>
  );
};

export default Main;
