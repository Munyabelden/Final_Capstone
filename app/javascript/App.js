import React, { useEffect } from 'react';

import { Route, Routes, Outlet } from 'react-router-dom';
import { Login, Signup } from './components';
import Layout from './components/Layout';
import DoctorDetails from './components/DoctorDetails';
import { useDispatch } from 'react-redux';
import { setAuthentication } from './store/reducers/authSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAuthentication())
  }, [dispatch]);
  
  return (
    <div>
      <Layout />
      <Routes>
        
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/doctors/:id' element={<DoctorDetails />} />
      </Routes>
    </div>
  )
}

export default App;
