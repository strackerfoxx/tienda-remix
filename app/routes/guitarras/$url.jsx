import { useState } from "react"
import { useLoaderData, useOutletContext } from "@remix-run/react"
import {getGuitarra} from '~/models/guitarras.server' 

export async function loader({params}) {
    const {url} = params
    const guitarra = await getGuitarra(url)

    if(guitarra.data.length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'Guitarra No Encontrada'
        })
    }
    
    const guitarraP = guitarra.data[0]
    return guitarraP
}

export function meta({data}) {
    return {
        title: `GuitarLA - ${data.nombre}`,
        description : `Guitarras en venta, guitarra ${data.nombre}`
    }
}

const Url = () => {

    const [cantidad, setCantidad] = useState(0)
    const guitarra = useLoaderData()
    const {nombre, descripcion, precio, stock, imagen} = guitarra.attributes
    const { id } = guitarra
    const imgUrl = imagen.data.attributes.url

    const {carritoCompras} = useOutletContext()

    const arreglo = []
    for (var i = 1; i <= stock; i++) { 
        arreglo.push(i)
    }

    const handleSubmit = e => {
        e.preventDefault();

        if(cantidad < 1) {
            alert('alerta de evento')
            return
        }

        const guitarraSeleccionada = {
            id,
            img: imgUrl,
            precio,
            stock,
            cantidad,
            nombre
        }
       
        carritoCompras(guitarraSeleccionada)
    }
  return (
    <div className="contenedor guitarra">
        

        <img src={imgUrl} alt={`Image de la guitarra ${nombre}`} />
        <div className="contenido">
            <h3>{nombre}</h3>
            <p className='texto'>{descripcion}</p>
            <p className='precio'>Stock  {stock}</p>
            <p className='precio'>Precio ${precio}</p>

            
            <form action="" className="formulario" onSubmit={(e) => { handleSubmit(e) }}>
                <label htmlFor="cantidad">Cantidad</label>

                <select 
                    onChange={(e) => setCantidad(+e.target.value)}
                    id="cantidad"
                >
                    <option value="0">-- Seleccione --</option>
                    {arreglo.map( indice => (
                        <option value={indice}>{indice}</option>                      
                    ))}

                </select>

                <input 
                type="submit" 
                value="agragar al carrito"/>
            </form>
        </div>
    </div>
  )
}

export default Url