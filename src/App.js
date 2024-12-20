import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import TiketPage from './pages/tiketpage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tiket" element={<TiketPage />} />
      </Routes>
    </Router>
  );
};

export default App;
