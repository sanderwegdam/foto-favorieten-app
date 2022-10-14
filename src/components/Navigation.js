import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to="/strand">strand</NavLink></li>
        <li><NavLink to="/lente">lente</NavLink></li>
        <li><NavLink to="/zomer">zomer</NavLink></li>
        <li><NavLink to="/herfst">herfst</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;
