import React, { useState } from 'react';
import './LoginSignup.css';

import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='page-container'>

      <div className='navbar'>
        Listen IQ
      </div>

      <div className='container'>

        <div className='header'>
          <div className='text'>Log In</div>
          <div className='underline'></div>
        </div>

        <div className='inputs'>
          <div className='input'>
            <img src={email_icon} alt='' />
            <input type='email' placeholder='email' />
          </div>

          <div className='input'>
            <img src={password_icon} alt='' />
            <input 
              type={showPassword ? 'text' : 'password'} 
              placeholder='password' 
            />
            <button 
              type='button' 
              className='show-btn' 
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>

        <div className='submit-container'>
          <div className='submit'>Log In</div>
        </div>

      </div>
    </div>
  );
}

export default Login;
