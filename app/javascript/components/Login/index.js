import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../store/reducers/authSlice';


const Login = ({ }) => {
  const [data, setData] = useState({
    email: '',
    password: ''
  });
  const auth = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ user: data}))
  }

  const handleOnChange = (e) => {
    setData({...data, [e.target.name]: e.target.value});
  }

  return (
    <div>
      <h2 className='login-title'>Login</h2>
      <form onSubmit={handleLogin}>
        <label>email</label>
        <input type="email" name="email" id="email" onChange={handleOnChange} />
        <label>password</label>
        <input type="password" name="password" id="password" onChange={handleOnChange} />
        <input type='submit' value='Login' />
      </form>
    </div>
  )
}

export default Login;