import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Screen/Login';
import Signup from './Screen/Signup';
import Dashboard from './Screen/Dashboard';
import Products from './Screen/Products'
import Home from './Screen/Home'

const App = () => {
  return (
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/home" element={<Home />} />
        <Route path="products/:id" element={<Products />} />
      </Routes>
  );
}

export default App;
