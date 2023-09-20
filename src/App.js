
import NavBar from '../src/Components/NavBar';// No logro identificar porque me marca error
import ItemListContainer from '../src/Components/ItemListContainer';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//import {useState, useEffect} from 'react'

function App() {
  //const [productos, setPorductos] = useState([])
  // si fuera una appi useEffect(async()=>{const fetchData=()=>{const response= await fetch('./Json/arrayProductos.json')if(!response.ok){throw new Error('No hay productos')  }      const data = await response.json() }},[])
  //const url= "./Json/arrayProductos.json"
  
  return (
    <  >
     <BrowserRouter>
      <NavBar />
      
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="llalal"/>} />
        <Route path='/Category'  />
        <Route path='/Bebidas'  /> 
        <Route path='/Especias' />
        <Route path='/Frutos' />
        <Route path='/Fiambres'  />
        <Route path='/Quesos' e />                        
        <Route path='*' />   

      </Routes>
      <ItemListContainer greeting="Bienvenido al Mercado Norte" />
      </BrowserRouter>
    </>
  );
}

export default App;
