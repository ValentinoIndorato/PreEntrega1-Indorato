import { useState } from "react";
import{getFirestore, addDoc, collection, doc, getDoc, updateDoc} from 'firebase/firestore'
import { useCartContext } from "./Context/CartContext";

 function Checkout  ( ) {
    const[nombre, setnombre]=useState('')
    const[apellido, setapellido]=useState('')
    const[telefono, settelefono]=useState('')
    const[email, setemail]=useState('')
    const[emailConfirmacion, setemailConfirmacion]=useState('')
    const[error, seterror]=useState('')
    const[ordenID, setordenID]=useState('')
    const[mensaje, setmensaje]=useState('')
    

const{ cart, removeProduct, totalPrice}= useCartContext()
const manejadorFormulario = (event) =>{
    event.preventDefault();
    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion){
        seterror('Complete Todos los campos')
        return
    }
    if (email !== emailConfirmacion){
        seterror('Su email no coincide.')
        return
    }

const total= totalPrice()
const orden ={
    items: cart.map((product)=>({
        id: product.id,
        title:product.title,
       
        cantidad: product.quantity,
    })),
    total: total,
    fecha: new Date(),
    nombre,
    apellido, 
    telefono,
    email,

    }
    Promise.all(
        orden.items.map(async(productoOrden)=>{
            const db= getFirestore()
            const productoRef= doc(db, 'products', productoOrden.id)
            const productoDoc = await getDoc(productoRef)
            const stockActual= productoDoc.data().stock
            await updateDoc(productoRef, {
                stock: stockActual - productoOrden.cantidad,
            })
        })

    )
    .then(()=>{
        const db= getFirestore()
        addDoc(collection(db,'orders'), orden)
        .then((docRef)=>{
            setordenID(docRef.id)
            removeProduct()
        })
        .catch((error)=>{
            console.log('Error', error)
            seterror('Error')
        })
    })
        .catch((error)=>{
            console.log('No se actualizo el stock', error)
            seterror('No se actualizo el stock')
        }) 
        setnombre('')
        setapellido('')
        settelefono('')
        setemail('')
        setemailConfirmacion('')
        setmensaje('')
}

return (<div>
            <h2>Complete tus datos para confirmar la compra</h2>
            <form  onSubmit={manejadorFormulario}>
                {cart.map((producto)=>(
                <div key={producto.id}>
                   <p>
                    {' '}
                    {producto.nombre} x {producto.cantidad}
                    </p>
                    <p>$ {producto.item.precio} </p>
                </div>))}
            <div>
                <label ></label> 
                <input type="text" value={nombre}  onChange={(e=>setnombre(e.target.value))} />
                
            </div>
            <div>
                <label ></label> 
                <input type="text" value={apellido}  onChange={(e=>setapellido(e.target.value))} />
                
            </div>
            <div>
                <label ></label> 
                <input type="number" value={telefono}  onChange={(e=>settelefono(e.target.value))} />
                
            </div>
            <div>
                <label ></label> 
                <input type="email" value={email}  onChange={(e=>setemail(e.target.value))} />
                
            </div>
            <div>
                <label ></label> 
                <input type="email" value={emailConfirmacion}  onChange={(e=>setemailConfirmacion(e.target.value))} />
                
            </div>
            {error && <p> {error}</p> }
            {ordenID && <p>Gracias por tu compra <br /> Tu numero de orden es: <br /> {'' } { ordenID} {''} </p> }
            <div>
                <label ></label> 
                <input type="text" value={error}  onChange={(e=>seterror(e.target.value))} />
                
            </div>
            <div>
                <label ></label> 
                <input type="text" value={ordenID}  onChange={(e=>setordenID(e.target.value))} />
                
            </div>
            <div>
                <label ></label> 
                <input type="text" value={mensaje}  onChange={(e=>setmensaje(e.target.value))} />
                
            </div>
           <div><button type="submit">Finalizar compra</button></div>



            </form>


        </div>
)}
 export default Checkout