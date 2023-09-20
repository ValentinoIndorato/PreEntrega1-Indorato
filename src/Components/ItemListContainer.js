import React from 'react'
import ItemList from './ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
function  ItemListContainer (props){
    const [item, setItem] = useState([])
  const {id} = useParams()
  useEffect(() =>{
    const url= "./Json/arrayProductos.json"
    const fetchData = async ()=>{
      try{
        const data = await new Promise ((resolve)=>{
          setTimeout(() => {
            resolve( id ? url.filter(i => i.category === id) :url)
          }, 3000);
        })
        setItem(data)
      }catch(error){
console.log("error", error)
      } 
    }
    fetchData()
  },[id])
    return <><h1 style={{color: "red"}} >{props.greeting }</h1>
    <ItemList item= {item} /></>
    
}
export default ItemListContainer