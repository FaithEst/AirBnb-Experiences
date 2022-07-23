import React from "react";
import '../styles.css';

function Jokes(props){
    /**
     * Challenge:
     * - Create state `isShown` (boolean, default to `false`)
     * - Add a button that toggles the value back and forth
     */

    /**
     * Challenge:
     * - Only display the punchline paragraph if `isShown` is true
     */
    const [isShown, setIsShown] = React.useState(false);
    function toggle(){
        setIsShown(prevIsShown => !prevIsShown)
        console.log(isShown)
    }

    return(
        <div className="joke">
            {props.setup && <h3 className="joke-setup">Setup: {props.setup}</h3>}  
            {isShown && <p>Punchline: {props.punchline}</p>}
            <button className="joke--button" onClick={toggle}>Show punchline</button>
            <hr></hr>
        </div>
    );
}

export default Jokes;
