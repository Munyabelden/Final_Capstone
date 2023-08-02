import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const location = useLocation();

  if(!isAuthenticated){
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return (
    <div>
      {/* <Navbar/> */}
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  )
};

export default Layout;
