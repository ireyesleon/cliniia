import React from 'react';
import { NavLink } from "react-router-dom";


const Nav = () => {
  return (
      <nav className='row p-2'>
        <h1 className='col-12 col-sm-5'>Isaías Reyes León Portfolio</h1>
        <ul className='col-12 col-sm-4 d-flex justify-content-center' id='nav-options'>
        <NavLink style={({ isActive }) => 
                      (isActive ? {color: 'blue'} : {color: 'black'})} to="/about">About me</NavLink>
        <NavLink style={({ isActive }) => 
                      (isActive ? {color: 'blue'} : {color: 'black'})} to="/portfolio">Portfolio</NavLink>
        <NavLink style={({ isActive }) => 
                      (isActive ? {color: 'blue'} : {color: 'black'})} to="/contact">Contact Me</NavLink>
        <NavLink style={({ isActive }) => 
                      (isActive ? {color: 'blue'} : {color: 'black'})} to="/resume">Resume</NavLink>
        </ul>
      </nav>
  )
}

export default Nav;