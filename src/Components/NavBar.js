import React from 'react'
import CartWidget from './CartWidget.js'

function NavBar() {

    return <div className="NabVar">
    <CartWidget/>
    <ul className= "" > <a href="">Mercado Norte</a>
        <li><a href="">Quesos</a> </li>
        <li><a href="">Fiambres</a></li>
        <li><a href="">Especias</a></li>
        <li><a href="">Bebidas e infuciones</a></li>
        <li><a href="">Frutos secos</a></li>
       
        
        
    </ul>
    
   
    </div>

}
export default NavBar