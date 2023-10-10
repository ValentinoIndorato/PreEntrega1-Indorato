
import { useState,useContext } from "react"
import Contador from "./Contador";
import {Link} from "react-router-dom"
import { cartContext } from "./Context/CartContext";

const ItemDetail = ({item}) => {
   const [goToCart, setGoTocart]=useState(false)
   const {addProduct}=useContext(cartContext)
   const onAdd=(quantity)=>{
      setGoTocart(true)
      addProduct(item, quantity)
   }


    return (
      <div>
       
          
          <h2>{item.title}</h2>
          <p>{item.SmallDescription}</p>
          <p> $ {item.Precio}</p>
          
       
       

       <div>
         {goToCart ? <Link to='/cart'>Terminar compra</Link> : <Contador stock={10} initial={0} onAdd={onAdd} />} 
         </div>
       </div>
    )
  }
  
  export default ItemDetail