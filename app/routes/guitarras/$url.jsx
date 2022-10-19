import { useLoaderData, Link } from "@remix-run/react"
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
    
    const guitarraP = guitarra.data[0].attributes
    return guitarraP
}

export function meta({data}) {
    return {
        title: `GuitarLA - ${data.nombre}`,
        description : `Guitarras en venta, guitarra ${data.nombre}`
    }
}

const Url = () => {
    const guitarra = useLoaderData()

    const {nombre, descripcion, precio, stock, url, imagen} = guitarra
    const imgUrl = imagen.data.attributes.url

  return (
    <div className="contenedor guitarra">
        <img src={imgUrl} alt={`Image de la guitarra ${nombre}`} />
        <div className="contenido">
            <h3>{nombre}</h3>
            <p className='texto'>{descripcion}</p>
            <p>Unidades en existencia:<p className='precio'> {stock}</p></p>
            <p className='precio'>{precio}</p>
        </div>
    </div>
  )
}

export default Url