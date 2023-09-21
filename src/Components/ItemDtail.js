import Contador from "./Contador"
const ItemDetail = ({item}) => {
    return (
      <div>
       
          
          <h2>{item.nombre}</h2>
          <p>{item.SmallDescription}</p>
          <p> $ {item.Precio}</p>
          
       
       <div>
          <Contador stockItems={10}/>
       </div>
       </div>
    )
  }
  
  export default ItemDetail