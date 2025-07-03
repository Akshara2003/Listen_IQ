import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginSignup.css';
import person_icon from '../assets/person.png';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const { username, email, password } = formData;
    if (!username && !email && !password) setError('');
  }, [formData]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:7002/api/auth/login', formData, {
        headers: { 'Content-Type': 'application/json' }
      });

      const { token, role } = res.data;
      localStorage.setItem("token", token);
      alert("Login successful!");
      navigate(role === 'admin' ? '/login-admin' : '/login-user');
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className='page-container'>
      <div className='navbar'>Listen IQ</div>

      <div className='container'>
        <div className='header'>
          <h2 className='text'>Log In</h2>
          <div className='underline'></div>
        </div>

        <div className='inputs'>
          <div className='input'>
            <img src={person_icon} alt='username icon' />
            <input type='text' name='username' placeholder='Username' onChange={handleChange} />
          </div>

          <div className='input'>
            <img src={email_icon} alt='email icon' />
            <input type='email' name='email' placeholder='Email' onChange={handleChange} />
          </div>

          <div className='input'>
            <img src={password_icon} alt='password icon' />
            <input
              type={showPassword ? 'text' : 'password'}
              name='password'
              placeholder='Password'
              onChange={handleChange}
            />
            <button type='button' className='show-btn' onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>

        {error && (formData.username || formData.email || formData.password) && (
          <div className='error-msg'>{error}</div>
        )}

        <div className='submit-container'>
          <button className='submit' onClick={handleLogin}>Log In</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
