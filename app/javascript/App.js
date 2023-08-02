import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login, Signup } from './components';
import ConsultationForm from './components/ConsultationForm'
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
      { 
        //  <Route path='/' element={ <Doctors />} />
       }
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/doctors/:id' element={<DoctorDetails />} />
        <Route path='/consultationForm' element={<ConsultationForm />} />
      </Routes>
    </div>
  )
}

export default App;
