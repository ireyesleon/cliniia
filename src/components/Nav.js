import React from 'react';
import { NavLink } from "react-router-dom";


const Nav = () => {
  return (
      <nav className='row p-2 d-flex'>
        <h1 className='col-12 col-md-5 text-center'>Isaías Reyes León Portfolio</h1>
        <ul className='col-12 col-md-6 d-flex justify-content-center' id='nav-options'>
        <NavLink style={({ isActive }) => 
                      (isActive ? {color: '#6c5b7c'} : {color: 'white'})} to="/about">About me</NavLink>
        <NavLink style={({ isActive }) => 
                      (isActive ? {color: '#6c5b7c'} : {color: 'white'})} to="/portfolio">Portfolio</NavLink>
        <NavLink style={({ isActive }) => 
                      (isActive ? {color: '#6c5b7c'} : {color: 'white'})} to="/contact">Contact Me</NavLink>
        <NavLink style={({ isActive }) => 
                      (isActive ? {color: '#6c5b7c'} : {color: 'white'})} to="/resume">Resume</NavLink>
        </ul>
      </nav>
  )
}

export default Nav;