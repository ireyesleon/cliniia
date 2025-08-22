import React from 'react';
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <NavLink to="/">
        <img
          id="logo-pic"
          src={require('../assets/images/clinIA.png')}
          alt="logo"
        />
      </NavLink>

      <ul id="nav-options">
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>Compañía</NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'active' : ''}>Soluciones</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contáctanos</NavLink>
        </li>
        <li>
          <NavLink to="/resume" className={({ isActive }) => isActive ? 'active' : ''}>Gobierno de datos</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;