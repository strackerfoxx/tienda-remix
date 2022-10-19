import {Link} from '@remix-run/react'
import {fechaFormato} from '~/utils/helpers'

const Post = ({post}) => {

  const {titulo, imagen, url, descripcion, publishedAt} = post
  const publicado = fechaFormato(publishedAt)
  return (
    <article className='post'>
      <img className='imagen' src={imagen.data.attributes.formats.small.url} alt={`imagen del blog sobre ${titulo}`} />
      <div className='contenido'>

        <h3>{titulo}</h3>
        <p className='fecha'>{publicado}</p>
        <p className='resumen'> {descripcion}</p>
        <Link to={`/posts/${url}`} className='enlace'>Leer Post</Link>
        
      </div>
    </article>
  )
}

export default Post