import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // Estado para el mensaje de error
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simulación de autenticación
    if (email === 'test@example.com' && password === 'password123') {
      console.log('Login successful');
      setErrorMessage(''); // Limpiar mensaje de error
      navigate('/dashboard'); // Redirigir al dashboard
    } else {
      setErrorMessage('Credenciales incorrectas. Por favor, intenta de nuevo.'); // Mostrar mensaje de error
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {errorMessage && <p className="error">{errorMessage}</p>} {/* Mostrar el mensaje de error */}

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
