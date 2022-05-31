import React from 'react';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <div className='center'>
      <Link to="/P11_Urbain_Jean-Christophe">
        <img src={logo} className='logo' alt='logo' />
      </Link>

        <ul>
          <Link to="/P11_Urbain_Jean-Christophe" className='nav'>
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