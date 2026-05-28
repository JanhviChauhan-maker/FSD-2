import{ useState } from 'react'; // Added import

function Task3(){
    const [text, settext] = useState('React Js Hooks');
    const [color, setcolor] = useState('red'); // Changed false to 'red'
    const [show, setshow] = useState(true);    // Kept true for visibility logic

    const changeText = () => {
        if(text === "Welcome students"){
            settext("React Js Hooks"); // Fixed to match original requirements
        }
        else{
            settext("Welcome students");
        }
    };

    const changeColor = () => {
        if(color === "red"){
            setcolor("blue");
        }
        else{
            setcolor("red");
        }
    };

    const changeShow = () => {
        if(show === true){ // Checks boolean state
            setshow(false);
            settext("");   // Clears text when hidden
        }
        else{
            setshow(true);
            settext("React Js Hooks"); // Restores text when shown
        }
    };

    return(
        <>
        <div>
            <h1 style={{color: 'red'}}>LJ university</h1> {/* Fixed main heading to stay red */}
            {/* Bound dynamic color and text states below */}
            <h2 style={{color: color}}>{text}</h2> 
            
            {/* Passed the new handler functions to the events */}
            <button onClick={changeText}>Change text</button>
            <button onDoubleClick={changeColor}>Change color</button>
            <button onClick={changeShow}>{show ? "Hide" : "Show"}</button>
        </div>
        </>
    );
}
export default Task3;
