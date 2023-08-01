import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Hello from './components/Hello';
import DoctorDetails from './components/DoctorDetails';

const router = createBrowserRouter(
  createRoutesFromElements(<Route index element={<DoctorDetails />} />),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
