import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Navigate, Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const location = useLocation();

  if(!isAuthenticated){
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return (
    <div>
      {/* <Navbar/> */}
      <nav>
        <ul>
          <li><NavLink to='/'>Doctors</NavLink></li>
          <li><NavLink to='/login'>Login</NavLink></li>
          <li><NavLink to='/signup'>Sign up</NavLink></li>
          <li><NavLink to='/consultationForm'>Book a Consultation</NavLink></li>
          <li><NavLink to = '/doctorForm'>Add Doctor</NavLink></li>
          <li><NavLink to='/my-reservations'>My Reservations</NavLink></li>
          {
            // <li><NavLink to = '/'>Add Doctors</NavLink></li>
            // <li><NavLink to = '/'>Delete Doctors</NavLink></li>
          }
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  )
};

export default Layout;
