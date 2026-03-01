import React, { useState } from 'react';
import './Auth.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
    <Navbar/>
    <div className="auth-page">
      <form className="auth-form">
        <h2>Signup</h2>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <Link to="/ac"><button type="submit">Create Account</button></Link>
        <p>Have an account? <a href="/login">Login</a></p>
      </form>
    </div>
    </>
  );
}

export default Signup;