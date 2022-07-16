import React from "react";
import './styles.css';

function Hero(){
    return(
        <section className="hero">
            <img className="hero--photo" src={process.env.PUBLIC_URL+"images/photo-grid.png"} alt="grid"/>
            <h1 className="hero--title">Online Experiences</h1>
            <p className="hero--description">
                Join unique interactive activities led by one-of-a-kind 
                hosts—all without leaving home.
            </p>
        </section>
    );
}

export default Hero;