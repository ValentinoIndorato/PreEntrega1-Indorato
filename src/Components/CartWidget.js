
import foto from "../assets/path214.png";
import { useCartContext } from "./Context/CartContext";


function CartWidget() {
  const {totalProducts, cart} = useCartContext();

  return (
    <div  className="cartWidget">
      <a href="">
        <img src={foto} style={{ width: "4rem" }} />
      </a>
      <span>{totalProducts() ||cart}</span>
      
    </div>
  );
}
export default CartWidget;
