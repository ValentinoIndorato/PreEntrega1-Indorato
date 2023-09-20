import React from 'react'
import CartWidget from './CartWidget.js'
import {Link} from "react-router-dom"

function NavBar() {

    return <div className="NabVar">
    <CartWidget/>
    <ul className= "" > <Link to="/">Mercado Norte</Link>
        <li><Link to="/Category">Categorías</Link> </li>
        <li><Link to="/Quesos">Quesos</Link> </li>
        <li><Link to="/Fiambres">Fiambres</Link></li>
        <li><Link to="/Especias">Especias</Link></li>
        <li><Link to="/Bebidas">Bebidas e infuciones</Link></li>
        <li><Link to="/Frutos">Frutos secos</Link></li>
       
        
        
    </ul>
    
   
    </div>

}
export default NavBar