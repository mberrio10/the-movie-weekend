import React, { useState, useEffect } from 'react';
import logo from './images/camera-icon.png';
import avatar from './images/login-icon.png';
import './Nav.css';

function Nav() {
  const [show, setShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => {
      window.removeEventListener('scroll', transitionNavBar);
    };
  }, []);

  return (
    <div className={`nav ${show && 'nav__red'}`}>
      <div className='nav__contents'>
        <img className='nav__logo' src={logo} alt='Logo' />
        <img className='nav__avatar' src={avatar} alt='Avatar' />
      </div>
    </div>
  );
}

export default Nav;
