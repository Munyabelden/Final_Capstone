import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Navigate, Outlet, useLocation } from "react-router-dom";
import Logo from '../images/Logo.png'

const Layout = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const location = useLocation();

  if(!isAuthenticated){
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return (
    <div className='navigation'>
      <button className='menu-icon'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>
      <nav className='nav-bar'>
        <img src={Logo} alt='Logo'/>
        <ul className='primary-navigation'>
          <li><NavLink to='/'>Doctors</NavLink></li>
          <li><NavLink to='/login'>Login</NavLink></li>
          <li><NavLink to='/signup'>Sign up</NavLink></li>
          <li><NavLink to='/consultationForm'>Book a Consultation</NavLink></li>
          {
            // <li><NavLink to = '/'>Add Doctors</NavLink></li>
            // <li><NavLink to = '/'>Delete Doctors</NavLink></li>
          }
        </ul>
      </nav>
    </div>
  )
};

export default Layout;
