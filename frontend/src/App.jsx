import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Admin from './Pages/Admin';
import AllProdAdmin from './Pages/AllProdAdmin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/allproducts" element={<AllProdAdmin />} />
      </Routes>
    </Router>
  );
}

export default App;
