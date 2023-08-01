import React from 'react';

import { Route, Routes, Outlet } from 'react-router-dom';
import { Login, Signup } from './components';

import DoctorDetails from './components/DoctorDetails';

const Layout = () => (
  <main>
    <nav>Hello nav</nav>
    <Outlet />
  </main>
);

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<h1>Hello home</h1>} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/doctors/:id' element={<DoctorDetails />} />
      </Routes>
    </div>
  )
}

export default App;
