import {Link} from 'react-router-dom';
function Item  ({item}) {
    return    <div> 
      <img src= {item.img} />
      <Link to={"/item/" + item.id} >        
         <h2 >{item.nombre}</h2>

  </Link>
  
  <h3>${item.Precio}</h3>
  <h4>{item.SmallDescription}</h4></div>

}
export default Item