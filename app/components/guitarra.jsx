import {Link} from '@remix-run/react'

const Guitarra = ({guitarra, id}) => {

  const {nombre, descripcion, precio, stock, imagen, url} = guitarra
  const imgUrlM = imagen.data.attributes.formats.medium.url
  const imgUrlS = imagen.data.attributes.formats.small.url
  const imgUrlT = imagen.data.attributes.formats.thumbnail.url

  return (
    <Link className='link' to={`/guitarras/${id}`} >
      <div className="guitarra">
          <img src={imgUrlM} alt={`Image de la guitarra ${nombre}`} />
          <div className="contenido">
              <h3>{nombre}</h3>
              <p className='descripcion'>{descripcion}</p>
              <p className='precio'>{precio}</p>
              <Link className="enlace" to={`/guitarras/${id}`} >Ver Producto</Link>
          </div>
      </div>
    </Link>
  )
}

export default Guitarra