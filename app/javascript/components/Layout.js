import { NavLink } from 'react-router-dom';

const Layout = () => {
 return (
    <nav>
      <ul>
        {
          // <li><NavLink to = '/'>Doctors</NavLink></li>
        }
        <li><NavLink to = '/'>Login</NavLink></li>
        <li><NavLink to = '/signup'>Sign up</NavLink></li>
        <li><NavLink to = '/consultationForm'>Book a Consultation</NavLink></li>
        {
        // <li><NavLink to = '/'>Add Doctors</NavLink></li>
        // <li><NavLink to = '/'>Delete Doctors</NavLink></li>
        }
      </ul>
    </nav>
 )
};

export default Layout;
