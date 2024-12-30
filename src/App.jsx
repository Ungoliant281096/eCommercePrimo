import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import RegisterForm from './components/Register/RegisterForm.jsx'
import LoginForm from './components/Login/LoginForm.jsx';

const isAuthenticated = () => {
  return localStorage.getItem('token') !== null;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/registro" element={<RegisterForm />} />
        <Route path="/perfil" element={isAuthenticated() ? <h1>Perfil</h1> : <Navigate to="/login" />} /> {/* Ruta protegida */}
        <Route path="/" element={<Navigate to="/login" />} /> {/* Redirige a /login por defecto */}
      </Routes>
    </Router>
  );
};

export default App;