import React from 'react';
import { Link } from 'react-router-dom';
import Config from '../../config/config';

import './index.css';

export default function component() {
  return (
    <nav className="main-navigation">
      <Link to="/">
        <img src={Config.ENGINEER_IMAGE} alt="ashu" />
      </Link>
      <div className="main-navigation-menu">
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
