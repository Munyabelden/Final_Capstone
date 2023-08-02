import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../store/reducers/authSlice';
import { Link, useNavigate } from 'react-router-dom';


const Login = ({ }) => {
  const [data, setData] = useState({
    email: '',
    password: ''
  });
  const { error, loading: authLoading } = useSelector((state) => state.auth)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const userData = { user: data};
    dispatch(login(userData));
    if(!authLoading && !error) {
      navigate('/')
    }
  }

  const handleOnChange = (e) => {
    setData({...data, [e.target.name]: e.target.value});
  }

  return (
    <div className='auth-container'>
      <div className='auth-image' />
      <div className='auth-form-container'>
        <h2 className='auth-title'>Hey, Hello, welcome back 👋</h2>
        <form onSubmit={handleLogin}>
          <label>email</label>
          <input type="email" name="email" id="email" onChange={handleOnChange} />
          <label>password</label>
          <input type="password" name="password" id="password" onChange={handleOnChange} />
          <input type='submit' value={authLoading ? 'Processing' : 'Login'} disabled={authLoading} />
        </form>
        <div className='auth-info-wrapper'>
          <span>Don't have account? <Link to='/signup'>Register here</Link></span>
        </div>
      </div>
    </div>
  )
}

export default Login;