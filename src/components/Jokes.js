import React from "react";
import './styles.css';

function Jokes(props){
    return(
        <div className="joke">
            {props.setup && <h3 className="joke-setup">Setup: {props.setup}</h3>}  
            <p>Punchline: {props.punchline}</p>
            <hr></hr>
        </div>
    );
}

export default Jokes;
