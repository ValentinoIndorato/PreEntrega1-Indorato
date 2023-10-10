
import foto from "../assets/path214.png";


function CartWidget() {

  return (
    <div  className="cartWidget">
      <a href="">
        <img src={foto} style={{ width: "4rem" }} />
      </a>
      <span>0</span>
    </div>
  );
}
export default CartWidget;
