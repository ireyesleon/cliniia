import React from 'react';
import { NavLink } from "react-router-dom";


const Nav = () => {
  return (
      <nav className='row p-2 d-flex'>
        <img className='col-12 col-md-6 mx-auto d-block' id="logo-pic" src={require('.././assets/images/clinIA.png')} alt="logo" />
        <ul className="col-12 col-md-6 d-flex justify-content-center align-items-center" id="nav-options">
        <NavLink style={({ isActive }) => 
                      (isActive ? {color: '#508380'} : {color: 'black'})} to="/about">Compañía</NavLink>
        <NavLink style={({ isActive }) => 
                      (isActive ? {color: '#508380'} : {color: 'black'})} to="/portfolio">Soluciones</NavLink>
        <NavLink style={({ isActive }) => 
                      (isActive ? {color: '#508380'} : {color: 'black'})} to="/contact">Contáctanos</NavLink>
        <NavLink style={({ isActive }) => 
                      (isActive ? {color: '#508380'} : {color: 'black'})} to="/resume">Gobierno de datos</NavLink>
        </ul>
      </nav>
  )
}

export default Nav;