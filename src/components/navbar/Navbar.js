import React from 'react';
import logo from './../../assets/img/logo.png';
import {FaBars, FaTimes} from "react-icons/fa";

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

  return (
    <header>
        <img src={logo} alt='logo' />
        <nav>
            <a href="/#">Home</a>
            <a href="/#">About</a>
            <a href="/#">Course</a>
            <a href="/#">Contact</a>
            <a href="/#">Mentors</a>
            <button className='primary-btn'>Book Live Class</button>
            <button onClick={showNavbar}>
                <FaTimes />
            </button>
        </nav>
        <button onClick={showNavbar}>
            <FaBars />
        </button>
    </header>
  )
}

export default Navbar;