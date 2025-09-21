import React, { useState } from 'react';

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Lógica para enviar el login a la API
    const response = await fetch('https://urban-spoon-q57xgg456gvf4wqr-5000.app.github.dev/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();
      // Guarda el token en el almacenamiento local del navegador
      localStorage.setItem('access_token', data.access_token);
      // Llama a la función de prop para indicar que el login fue exitoso
      onLogin();
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginPage;