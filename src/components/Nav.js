import React from 'react';
import { Link } from "react-router-dom";


const Nav = () => {
  return (
    <>
    <div className='nav'>
      <nav>
        <h1>Isaías Reyes León</h1>
        <ul>
        <Link to="/about">About me</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact Me</Link>
        <a href='./assets/Isaias Reyes Leon Resume.pdf' download>Resume</a>
        </ul>
      </nav>
    </div>
    </>
  )
}

export default Nav;