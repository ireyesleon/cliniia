import React from 'react';
import { Link } from "react-router-dom";


const Nav = () => {
  return (
      <nav className='row p-2'>
        <h1 className='col-12 col-sm-5'>Isaías Reyes León Portfolio</h1>
        <ul className='col-12 col-sm-4 d-flex justify-content-center' id='nav-options'>
        <Link to="/about">About me</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact Me</Link>
        <Link to="/resume">Resume</Link>
        </ul>
      </nav>
  )
}

export default Nav;