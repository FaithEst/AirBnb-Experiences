import React from "react";
import './styles.css';

function Contact(props){
    return(
        <div className="contact-card">
            <img src={props.img}/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src={process.env.PUBLIC_URL + "images/phoneIcon"} />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src={process.env.PUBLIC_URL + "images/mailIcon"} />
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Contact;