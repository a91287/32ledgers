// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Login from './components/Login'

import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import PrivateRoute  from './components/PrivateRoute';



const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/32devs/build/index.html" element={<Home />} />
            <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
};

export default App;