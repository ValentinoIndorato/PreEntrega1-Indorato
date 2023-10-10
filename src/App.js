
import NavBar from '../src/Components/NavBar';// No logro identificar porque me marca error
import ItemListContainer from '../src/Components/ItemListContainer';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error404 from './Components/Error404'
import ItemDetailContainer from "./Components/ItemDetailContainer"
import foto from "./assets/img/pngSalame.png";
//import {useState, useEffect} from 'react'

import Checkout from './Components/Checkout'
import Cart from './Components/Cart'
import CartContext from './Components/Context/CartContext'

function App() {
  //const [productos, setPorductos] = useState([])
  // si fuera una appi useEffect(async()=>{const fetchData=()=>{const response= await fetch('./Json/arrayProductos.json')if(!response.ok){throw new Error('No hay productos')  }      const data = await response.json() }},[])
  //const url= "./Json/arrayProductos.json"
  
  return (
    <  >
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
    </>
  );
}

export default App;
