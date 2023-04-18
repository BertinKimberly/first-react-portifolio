import React from 'react'
import { Link } from 'react-router-dom';
import "../Styles/Navbar.css";

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='toggle-menu'>
        <button>Menu</button>
      </div>
      <div className='links'>
        <Link to={"/"}>Home</Link>
        <Link to={"/projects"}>Projects</Link>
        <Link to={"/experience"}>Experience</Link>
      </div>
    </div>
  )
}

export default Navbar

