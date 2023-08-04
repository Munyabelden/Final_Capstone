import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  NavLink,
  Navigate,
  Outlet,
  useLocation
} from 'react-router-dom';
import Logo from '../images/Logo.png';
import { logout } from '../store/reducers/authSlice';

const Layout = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch(); 
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
      <button type="button" className="menu-icon" onClick={toggleNav}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>
      <nav className={`nav-bar ${isNavVisible ? 'show' : ''}`}>
        <img src={Logo} alt="Logo" />
        <button className="exit" onClick={toggleNav}>&times;</button>
        <ul className={`primary-navigation ${isNavVisible ? 'show' : ''}`}>
          <li>
            <NavLink exact to="/" isActive={() => location.pathname === '/'} activeClassName="active-link">
              Doctors
            </NavLink>
          </li>
          <li>
            <NavLink to="/consultationForm" isActive={() => location.pathname === '/consultationForm'} activeClassName="active-link">
              Book Consultation
            </NavLink>
          </li>
          <li>
            <NavLink to="/doctorForm" isActive={() => location.pathname === '/doctorForm'} activeClassName="active-link">
              Add Doctor
            </NavLink>
          </li>
          <li>
            <NavLink to="/my-reservations" isActive={() => location.pathname === '/my-reservations'} activeClassName="active-link">
              My Reservations
            </NavLink>
          </li>
          <li className="logout-btn" onClick={() => dispatch(logout())}>
            <i class="fa-solid fa-arrow-right-from-bracket"></i>
            Logout
          </li>
        </ul>
        <div>
          <p>Nurturing Health, Inspiring Hope: Uniting for a Healthier Future</p>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
