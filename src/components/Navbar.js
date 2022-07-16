import React from "react";
import './styles.css';

function Navbar(){
    return(
        <nav className="navbar">
            <img src={process.env.PUBLIC_URL+"images/logo.png"} className="airbnb--logo" alt="logo"/>
        </nav>
    );
}

export default Navbar;