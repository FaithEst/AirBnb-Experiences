import React from "react";
import './styles.css';

function Card(props){
    let badgeText;
    if(props.item.openSpots === 0){
        badgeText = "SOLD OUT"
    } else if(props.item.location === "Online"){
        badgeText = "ONLINE"
    }
    return(
        <section className="cards--section">
            <div className="card">
                <div className="card--image">
                    <img src={props.item.coverImg}/>
                    {badgeText && <span className="card--update">{badgeText}</span>}
                </div>
                <div className="star--rates">
                    <img className="star--icon" src={process.env.PUBLIC_URL+"images/star.png"}/>
                    <span className="star--text">{props.item.stats.rating} </span>
                    <span className="star--desc">({props.item.stats.reviewCount})</span> 
                    <span className="star--desc">•{props.item.location}</span>
                </div>
            <p className="card--desc">{props.item.title}</p>
            <p className="card--price"><strong>From ${props.item.price}</strong> / person</p>
            </div>
        </section>
    );
}

export default Card;