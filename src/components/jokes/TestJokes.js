import Jokes from "./Jokes";
import jokesData from "./jokesData";

export default function TestJokes(){
    const jokes = jokesData.map(joke => {
        return(
            <Jokes 
                setup={joke.setup}
                punchline={joke.punchline}
            />
        )
    });
    return(
        <>
            {jokes}
        </>
    )
}
