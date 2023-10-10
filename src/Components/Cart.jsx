import { useContext } from "react"
import { cartContext } from "./Context/CartContext";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import  Checkout from './Checkout';
import {Link} from "react-router-dom"
import ItemCart from "./ItemCart";
function Cart(){
    const { cart, totalprice}= useContext(cartContext)
    
   const order={
    buyer:{
        name:'1',
        email:'2',
        phone:'3',
        adress:'4',

    },
    items:cart.map((product)=>({
        id: product.id,
        title:product.title,
        price: product.price,
        quantitu: product.quantity,
    })),
    total: totalprice(),
   }
   function handleClick(){
    const db= getFirestore()
    const ordersCollection= collection(db, 'orders')
    addDoc(ordersCollection, order)
   }
   if (cart.leght ===0){
    return(
        <>
        <Link to='/'>Volver</Link></>
    )
   }
    return(<>
    {
        cart.map((product)=>(
            <ItemCart key={product.id} product={product}/>
        ))
    }
    <p>total: {totalprice()}</p>
    <button onClick={handleClick}>Emitir compra</button>
    <Link to='/checkout'>{''}
    <button onClick={handleClick}>Finalizar compra</button></Link>
    </>)
}
export default Cart