import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Navigate, Outlet, useLocation } from 'react-router-dom';
import Logo from '../images/Logo.png';

const Layout = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const location = useLocation();
  const [isNavVisible, setNavVisible] = useState(false);

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  const toggleNav = () => {
    setNavVisible(!isNavVisible);
  };

  return (
    <div className="navigation">
      <button className='menu-icon' onClick={toggleNav}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>
      <nav className={`nav-bar ${isNavVisible ? 'show' : ''}`}>
        <img src={Logo} alt="Logo" />
        <ul className="primary-navigation">
          <li>
            <NavLink exact to="/" activeClassName="active-link">
              Doctors
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" activeClassName="active-link">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/signup" activeClassName="active-link">
              Sign up
            </NavLink>
          </li>
          <li>
            <NavLink to="/consultationForm" activeClassName="active-link">
              Book a Consultation
            </NavLink>
          </li>
          {/* <li><NavLink to="/">Add Doctors</NavLink></li>
          <li><NavLink to="/">Delete Doctors</NavLink></li> */}
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
