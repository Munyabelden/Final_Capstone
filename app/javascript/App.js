import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import { Login, Signup } from './components';

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
        <Route path='/register' element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App;
