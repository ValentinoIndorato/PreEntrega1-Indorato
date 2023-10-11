import Item from "./Item";
function ItemList({item})  {
    return (
        <div >{ item.map(item=><div key={item.id}  className= "card">
           <Item item={item}/> 
           </div>
          )   
          }
       </div>
      )
    }
export default ItemList;
