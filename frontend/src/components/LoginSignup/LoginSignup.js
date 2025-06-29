import React from 'react';
import './LoginSignup.css';

import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';

const Login = () => {
  return (
    <div className='container'>

      <div className='header'>
        <div className='text'>Log In</div>
        <div className='underline'></div>
      </div>

      <div className='inputs'>
        <div className='input'>
          <img src={email_icon} alt='' />
          <input type='email' placeholder='Email Id' />
        </div>

        <div className='input'>
          <img src={password_icon} alt='' />
          <input type='password' placeholder='Password' />
        </div>
      </div>

      

      <div className='submit-container'>
        <div className='submit'>Log In</div>
      </div>

    </div>
  );
}

export default Login;
