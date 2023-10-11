import { useState,useEffect } from "react";

function Contador({ initial, stock, onAdd }){
    const [counter, setCounter] = useState(parseInt(initial))


   
        
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
    useEffect(() => {
		setCounter(parseInt(initial));
	}, [initial]);
    return(
        <div>
        <button disabled={counter  >= stock} onClick={()=>incrementarStock()}>+</button>
        <button>{counter}</button>
        <button disabled={counter <= 1} onClick={()=>decrementarStock()}>-</button>
        <button disabled={stock <= 0} onClick={() => onAdd(counter)}>
					Agregar al carrito
				</button>
        </div>
    )


}
export default Contador