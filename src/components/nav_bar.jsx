import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <Link to="/">Swipey Swipe</Link>
    <Link to="/matches">Matchy Match</Link>
  </nav>
);

export default NavBar;
