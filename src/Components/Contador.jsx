import { useState } from "react";

function Contador(){
    const [counter, setCounter] = useState(1);


   
        
    const incrementarStock = () => {
        if ( counter < 10 ) {
            setCounter(counter + 1);
        } 
    }

    const decrementarStock = () => {
        if (counter >= 1) {
            setCounter(counter - 1)
            
        } 
        
    }
    return(
        <>
        <button onClick={()=>incrementarStock()}></button>
        <button>{counter}</button>
        <button onClick={()=>decrementarStock()}></button>
        </>
    )


}
export default Contador