import React from "react";
import './styles.css';
import photoGrid from '../images/photo-grid.png';

function Hero(){
    return(
        <section className="hero">
            <img className="hero--photo" src={photoGrid} alt="grid"/>
            <h1 className="hero--title">Online Experiences</h1>
            <p className="hero--description">
                Join unique interactive activities led by one-of-a-kind 
                hosts—all without leaving home.
            </p>
        </section>
    );
}

export default Hero;