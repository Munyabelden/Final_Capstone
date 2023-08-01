import React from 'react';

import { Route, Routes, Outlet } from 'react-router-dom';
import { Login, Signup } from './components';
import Layout from './components/Layout';
import DoctorDetails from './components/DoctorDetails';

function App() {
  return (
    <div>
      <Layout />
      <Routes>
        
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Signup />} />
        <Route path='/doctors/:id' element={<DoctorDetails />} />
      </Routes>
    </div>
  )
}

export default App;
