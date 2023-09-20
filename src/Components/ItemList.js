import Item from './Item' 
function ItemList ({item}){
return item.map(i =>
        <div  key={i.id}>
        <Item item= {i} />
        </div>
        )
}
export default ItemList