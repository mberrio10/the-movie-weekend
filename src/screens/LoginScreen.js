import React from 'react';
import logo from '../images/camera-icon.png';
import './LoginScreen';

function LoginScreen() {
  return (
    <div className='login'>
      <div className='login-background'>
        <img src={logo} alt='icon' />
      </div>
    </div>
  );
}

export default LoginScreen;
