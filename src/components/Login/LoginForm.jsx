import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';


const LoginForm = () => {
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/login', { usuario, contraseña }); // Usar la ruta relativa /login
      localStorage.setItem('token', response.data.token);
      navigate('/perfil'); // Redirigir al perfil después del login exitoso
    } catch (error) {
      console.error('Error en el login:', error);
      alert('Credenciales inválidas'); // Mostrar un mensaje de error al usuario
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input type="text" placeholder="Usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
      <input type="password" placeholder="Contraseña" value={contraseña} onChange={(e) => setContraseña(e.target.value)} />
      <button type="submit">Iniciar sesión</button>
    </form>
  );
};

export default LoginForm; 