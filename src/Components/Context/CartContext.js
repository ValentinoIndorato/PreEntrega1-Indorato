import { createContext, useState } from "react";
export const cartContext=createContext()
function CartContext({children}) {
    const [cart, setCart]= useState([])
    function addProduct(item, quantity){
        if (isInCart(item.id)) {
            setCart(
              cart.map((product) => {
                return product.id === item.id
                  ? { ...product, quantity: product.quantity + quantity }
                  : product;
              })
            );
          } else {
            setCart([...cart, { ...item, quantity }]);
          }

    }
    function totalPrice(){
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
    }
    function totalProducts (){
        cart.reduce(
            (acumulador, productoActual) => acumulador + productoActual.quantity,
            0
          )
    }
    const clearCart = () => setCart([]);
    const isInCart = (id) =>
    cart.find((product) => product.id === id) ? true : false;
    function removeProduct(id){
        setCart(cart.filter((product) => product.id !== id));
    }


    return (
        <CartContext.Provider
          value={{
            clearCart,
            isInCart,
            removeProduct,
            addProduct,
            totalPrice,
            totalProducts,
            cart,
          }}
        >
          {children}
        </CartContext.Provider>
      );

}
export default CartContext