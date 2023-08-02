import React, { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Login, Signup } from './components';
import ConsultationForm from './components/ConsultationForm'
import Layout from './components/Layout';
import DoctorDetails from './components/DoctorDetails';
import Home from './components/view/Home';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthentication, selectIsAuthenticated } from './store/reducers/authSlice';

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);

  useEffect(() => {
    dispatch(setAuthentication())
  }, [dispatch]);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  return (
    <div>
      <Layout />
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/doctors/:id' element={<DoctorDetails />} />
        <Route path='/consultationForm' element={<ConsultationForm />} />
      </Routes>
    </div>
  )
}

export default App;
