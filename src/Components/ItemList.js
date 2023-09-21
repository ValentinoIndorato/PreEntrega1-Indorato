import Item from "./Item";
function ItemList({item})  {
    return (
        < >{ item.map(item=><div key={item.id}  className= "card">
           <Item item={item}/> 
           </div>
          )   
          }
       </>
      )
    }
export default ItemList;
