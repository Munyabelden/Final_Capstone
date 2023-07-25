import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Hello from './components/Hello';

const router = createBrowserRouter(
  createRoutesFromElements(<Route index element={<Hello />} />),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
