import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LayOut from './components/view/LayOut';
import Home from './components/view/Home';
import './assets/styles/custom.scss';

function App() {
  return (
    <div className="container-fluid col-md-12 d-flex p-0">
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
