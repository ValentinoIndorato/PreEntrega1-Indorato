import {Link} from 'react-router-dom';
import foto from "../assets/img/pngSalame.png";
import Contador from './Contador';


function Item  ({item}) {
    return    <div> 
      <img src={foto}  />
      <img src={item.img}/>
      <Link to={"/item/" + item.id} >        
         <h2 >{item.title}</h2>

  </Link>
  <Contador/>
  
  <h3>${item.Precio}</h3>
  <h4>{item.SmallDescription}</h4>
  
  </div>
  

}
export default Item