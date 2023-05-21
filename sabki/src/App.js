// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from 'react';

import Navigation from './components/Navbar';
import Home from './pages/Home';
import Survey from './pages/Survey';
import Panduan from './pages/Panduan';
import ErrorPage from './pages/ErrorPage';
import PetaIndo from './components/Map';

function App() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route exact path="survey" element={<Survey />} />
          <Route exact path="panduan" element={<Panduan />} />
          <Route exact path="peta" element={<PetaIndo />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
