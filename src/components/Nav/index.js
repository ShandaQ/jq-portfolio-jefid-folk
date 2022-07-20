import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className='side-nav'>
      <ul id = "navbar">
        <li>
          <Link to='/about'>ABOUT</Link>
        </li>
        <li>
          <Link to='/resume'>RESUME</Link>
        </li>
        <li>
          <Link to='/portfolio'>PORTFOLIO</Link>
        </li>
        <li>
          <Link to='/contact'>CONTACT</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;