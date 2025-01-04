import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import RegisterForm from './pages/Register/RegisterForm.jsx'
import LoginForm from './pages/Login/LoginForm.jsx';
import { UserPerfil } from './pages/userPerfil/UserPerfil.jsx';

const isAuthenticated = () => {
  return localStorage.getItem('token') !== null;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/registro" element={<RegisterForm />} />
        <Route path="/perfil" element={isAuthenticated() ? <UserPerfil/> : <Navigate to="/login" />} /> {/* Ruta protegida */}
        <Route path="/" element={<Navigate to="/login" />} /> {/* Redirige a /login por defecto */}
      </Routes>
    </Router>
  );
};

export default App;