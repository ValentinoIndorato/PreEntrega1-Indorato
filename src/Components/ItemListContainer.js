import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import arrayProductos from "../Json/arrayProductos.json";

function ItemListContainer() {
  const [item, setItem] = useState([]);
  const { id } = useParams();
  useEffect(()=>{
    const fetchData = async()=>{
       try{
       const data = await new Promise((resolve)=>{
       setTimeout(()=>{
       resolve(id ? arrayProductos.filter(item=> item.Category === id) : arrayProductos)
      }, 200);
       });
       setItem(data);
     }catch(error){
       console.log('Error:', error);
     }
   };
   fetchData();   }, [id])

  return (
    <>
      
      <ItemList item={item} />
      
      
    </>
  );
}
export default ItemListContainer;
