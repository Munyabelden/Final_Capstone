import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import ConsultationForm from './components/ConsultationForm';

const router = createBrowserRouter(
  createRoutesFromElements(<Route index element={<ConsultationForm />} />),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
