
import NavBar from './Components/NavBar';// No logro identificar porque me marca error
import ItemListContainer from './Components/ItemListContainer';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Bebidas from './Components/Category/Bebidas'
import Fiambres from './Components/Category/Fiambres'
import Quesos from './Components/Category/Quesos'

function App() {
  return (
    <  >
     <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting='Este'/>} />
        <Route path='/Category'  />
        <Route path='/Bebidas' element={<Bebidas/>} /> 
        <Route path='/Especias' />
        <Route path='/Frutos' />
        <Route path='/Fiambres' element={<Fiambres/>} />
        <Route path='/Quesos' element={<Quesos />} />                        
        <Route path='*' element={<Error/>} />   

         </Routes>
      <ItemListContainer greeting="Bienvenido al Mercado Norte" />
      </BrowserRouter>
    </>
  );
}

export default App;
