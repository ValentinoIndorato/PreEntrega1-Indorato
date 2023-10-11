
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from '../src/Components/NavBar';// No logro identificar porque me marca error
import ItemListContainer from '../src/Components/ItemListContainer';
import ItemDetailContainer from "./Components/ItemDetailContainer"
import Error404 from './Components/Error404'
import CartContext from './Components/Context/CartContext'
import Cart from './Components/Cart'
import Checkout from './Components/Checkout'

import foto from "./assets/img/pngSalame.png";
import './App.css';

function App() {    
  return (
    <div>
     <BrowserRouter>     
      <CartContext>
      <NavBar />      
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="llalal"/>} />
        <Route path='/category/:id'  element={<ItemListContainer />} />
        <Route path={"/item/:id"} element={<ItemDetailContainer/>} />   
        <Route path={"/cart"} element={<Cart/>} />   
        <Route path={"/checkout"} element={<Checkout/>} />                         
        <Route path='*'element={<Error404 />} />   
      </Routes>
      </CartContext>            
      </BrowserRouter>
      <img src= {foto}  style={{ width: "55rem" }}/>
    </div>
  );
}

export default App;
