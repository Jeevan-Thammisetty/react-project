import React, { useState } from 'react';
import './Auth.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
    <Navbar/>
    <div className="auth-page">
      <form className="auth-form">
        <h2>Login</h2>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
       <Link to="/ac"> <button type="submit">Login</button></Link>
        <p>No account? <a href="/signup">Signup</a></p>
      </form>
    </div>
    </>
  );
}

export default Login;