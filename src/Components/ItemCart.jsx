
import { useContext } from "react";
import { cartContext } from "./Context/CartContext";

function ItemCart(product){
    const { removeProduct}= useContext(cartContext)
    return( <>
    <img src={product.img} />
    <div>
        <ul>
            <li>Producto: { product.title}</li>
            <li>Cantidad: {product.quantity} </li>
            <li>Precio unitario:  {product.precio}</li>
            <li>Precio Total:  {product.quantity * product.precio} </li>
            <button onClick={()=>removeProduct(product.id)}>Eliminar de carrito</button>
        </ul>
    </div>
    </>)
}
export default ItemCart