import React from "react";
import './styles.css';
import starIcon from '../images/star.png';

function Card(){
    return(
        <section className="cards--section">
            <div className="card">
                <div className="card--image">
                    <span className="card--update">SOLD OUT</span>
                </div>
                <div className="star--rates">
                <img className="star--icon" src={starIcon}/>
                <p className="star--text">5.0 <span className="star--desc">(6).USA</span> </p>
            </div>
            <p className="card--desc">Life lessons with Katie Zaferes</p>
            <p className="card--price"><strong>From $136</strong> / person</p>
            </div>
        </section>
    );
}

export default Card;