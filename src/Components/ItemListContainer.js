import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getFirestore, collection, getDocs, where, query} from "firebase/firestore";

function ItemListContainer() {
  const [item, setItem] = useState([]);
  const { id } = useParams();
  

  useEffect(( ) => {
    const querydb=getFirestore()
    const queryCollection = collection(querydb, 'products')
    /*getDocs(queryCollection)
    .then( res=>setItem(res.docs.map(p=> ({id: p.id, ...p.data()}))))*/
    if(id){
      const queryFilter = query(queryCollection, where('Category', '==', id))
      getDocs(queryFilter).then((res)=> setItem(res.docs.map((p)=>({id: p.id, ...p.data}))))
    }else{
      getDocs(queryCollection).then( (res)=>setItem(res.docs.map((p)=> ({id: p.id, ...p.data()}))))
    }
  }, [id]) 
 

  return (
    <div className="ItemListContainer">
      
      <ItemList item={item} />
      
      
    </div>
  );
}
export default ItemListContainer;
