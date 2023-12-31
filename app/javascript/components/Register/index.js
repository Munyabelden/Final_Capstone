import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signup } from '../../store/reducers/authSlice';
import { Link, useNavigate } from 'react-router-dom';

const Register = ({}) => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    password: '',
    confirm_password: '',
  });

  const { error, loading: authLoading } = useSelector((state) => state.auth)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    dispatch(signup({user: {...formData, phone: parseInt(formData.phone)}}));
    if(!authLoading && !error){
      navigate('/');
    }
  }

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <div className='auth-container'>
      <div className='auth-image' />
      <div className='auth-form-container'>
        {/* <h2 className='auth-title'>Signup</h2> */}
        <form onSubmit={handleSignup}>
          <label htmlFor='first_name'>First name</label>
          <input type="text" name="first_name" id="first_name" onChange={handleOnChange} />
          <label htmlFor='last_name'>Last name</label>
          <input type="text" name="last_name" id="last_name" onChange={handleOnChange} />
          <label htmlFor='phone'>Phone</label>
          <input type="text" name="phone" id="phone" onChange={handleOnChange} />
          <label htmlFor='email'>email</label>
          <input type="email" name="email" id="email" onChange={handleOnChange} />
          <label htmlFor='password'>Password</label>
          <input type="password" name="password" id="password" onChange={handleOnChange} />
          <label htmlFor='confirm_password'>Confirm password</label>
          <input type="password" name="confirm_password" id="confirm_password" onChange={handleOnChange} />
          <input type='submit' value={authLoading ? 'Processing' : 'Signup'} disabled={authLoading} />
        </form>
        <div className='auth-info-wrapper'>
          <span>Already have account? <Link to='/login'>Login here</Link></span>
        </div>
      </div>
    </div>
  )
}

export default Register;