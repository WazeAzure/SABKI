import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navbar';
import Home from './pages/Home';
import Survey from './pages/Survey';
import Panduan from './pages/Panduan';
import ErrorPage from './pages/ErrorPage';
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="/survey" element={<Survey />} />
            <Route path="/panduan" element={<Panduan />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
