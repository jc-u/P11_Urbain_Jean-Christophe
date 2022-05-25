import React from 'react';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <div className='center'>
      <Link to="/">
        <img src={logo} className='logo' alt='logo' />
      </Link>

        <ul>
          <Link to="/" className='nav'>
            <li>Acceuil</li>
          </Link>
          <Link to="/about" className='nav'>
            <li>A propos</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;