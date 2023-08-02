import React, { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Login, Signup } from './components';
import ConsultationForm from './components/ConsultationForm'
import Layout from './components/Layout';
import DoctorDetails from './components/DoctorDetails';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthentication } from './store/reducers/authSlice';

function App() {
  const dispatch = useDispatch();
  const { loading: authLoading } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(setAuthentication())
  }, [dispatch]);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  if (authLoading) {
    return <p>Loading...!</p>
  }

  return (
    <div>
      <Routes>
        <Route element={<Layout />} >
          <Route path='/' element={<h1>Hello from Home</h1>} />
          <Route path='/doctors/:id' element={<DoctorDetails />} />
          <Route path='/consultationForm' element={<ConsultationForm />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App;
