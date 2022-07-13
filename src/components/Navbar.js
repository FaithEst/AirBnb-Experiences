import React from "react";
import './styles.css';
import logo from '../images/logo.png';

function Navbar(){
    return(
        <nav className="navbar">
            <img src={logo} className="airbnb--logo" alt="logo"/>
        </nav>
    );
}

export default Navbar;