import React from "react";
import '../styles.css';

function Jokes(props){
    /**
     * Challenge:
     * - Create state `isShown` (boolean, default to `false`)
     * - Add a button that toggles the value back and forth
     */
    const [isShown, setIsShown] = React.useState(false);
    function toggle(){
        setIsShown(prevIsShown => !prevIsShown)
    }
    const mode = isShown ? "shown" : "not shown";
    return(
        <div className="joke">
            {props.setup && <h3 className="joke-setup">Setup: {props.setup}</h3>}  
            <p>Punchline: {props.punchline}</p>
            <button className="joke--button" onClick={toggle}>{mode}</button>
            <hr></hr>
        </div>
    );
}

export default Jokes;
