import { useState, useEffect } from 'react'
import {useOutletContext} from '@remix-run/react'

import styleCart from '~/styles/carrito.css'

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: styleCart
    },
  ]
}

export default function Carrito() {

  const  [total, setTotal] = useState()
  const {carrito, cantidadActualizada, eliminarProducto} = useOutletContext()
  const arreglo = []

  function cantidadSelect(stock){
    for (var i = 1; i <= stock; i++) { 
      arreglo.push(i)
    } 
  }

  useEffect(() => {
    const subTotal = carrito.reduce( (total, producto) => total + (producto.cantidad * producto.precio), 0 )
    setTotal(subTotal)

  }, [carrito])
  

  return (
    <main>
        <h1 className='heading'>Carrito de compras</h1>
        <div className='contenido'>
          <div className='carrito'>
              <h2>Articulos</h2>

              {carrito?.length === 0 ? 'El carrito esta vacio' : carrito?.map(producto => (
                <div key={producto.id} className='producto'>
                  {cantidadSelect(producto.stock)}
                  <div>
                    <img src={producto.img} alt={`imagen del producto${producto.nombre}`} />
                  </div>

                  <div>
                     <p className='nombre'><span>{producto.nombre}</span></p>
                     <p>Cantidad: {producto.cantidad}</p>
                     <select value={producto.cantidad} onChange={ e => cantidadActualizada({
                        cantidad: +e.target.value,
                        id: producto.id
                        })}
                     
                     className='select'>
                        {arreglo.map( indice => (
                            <option value={indice}>{indice}</option>                      
                        ))}
                     </select>

                     <p className='precio'>$ <span>{producto.precio}</span> </p>
                     <p className='subtotal'>subtotal <span>${producto.cantidad * producto.precio}</span> </p>
                  </div>    

                  <button className='btn-eliminar' onClick={() => eliminarProducto(producto.id)}
                  type='button' >X</button>             
                </div>                
              ))}

          </div>

          <aside className='resumen'>
              <h3>Resumen del Pedido</h3>
              <p>Total a pagar: ${total}</p>
          </aside>
        </div>    
    </main>
  )
}
