import React from 'react'
import CartWidget from './CartWidget.js'
import {Link} from "react-router-dom"

function NavBar() {

    return <div className="NabVar">
    <CartWidget/>
    <ul className= "" > <Link to="/">Mercado Norte</Link>
        <li><Link to="/Category">Categorías</Link> </li>
        <li><Link to="/category/Bebidas">Bebidas e infuciones</Link>       </li>
        <li><Link to="/Especias">Especias</Link></li>
        <li><Link to="/category/Fiambres">Fiambres</Link></li>     
        <li><Link to="/Frutos">Frutos secos</Link></li>
        <li><Link to="/category/Quesos">Quesos</Link> </li>
        
       
        
        
    </ul>
    
   
    </div>

}
export default NavBar