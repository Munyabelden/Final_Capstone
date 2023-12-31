import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ConsultationForm from './components/ConsultationForm';
import DoctorForm from './components/DoctorForm';
import { Login, MyReservations, Signup } from './components';
import Layout from './components/Layout';
import DoctorDetails from './components/DoctorDetails';
import { setAuthentication } from './store/reducers/authSlice';
import Home from './components/view/Home';

function App() {
  const dispatch = useDispatch();
  const { loading: authLoading } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(setAuthentication());
  }, [dispatch]);

  if (authLoading) {
    return <p>Loading...!</p>;
  }

  return (
    <div className="container-fluid col-md-12 d-flex p-0">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/doctors/:id" element={<DoctorDetails />} />
          <Route path="/consultationForm" element={<ConsultationForm />} />
          <Route path="/doctorForm" element={<DoctorForm />} />
          <Route path="/my-reservations" element={<MyReservations />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
