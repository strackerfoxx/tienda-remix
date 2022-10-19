import { useLoaderData } from "@remix-run/react"
import {getPost} from '~/models/posts.server'
import {fechaFormato} from '~/utils/helpers'
import styleB from '~/styles/blog.css'

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: styleB
    },
  ]
}

export async function loader({params}) {
    const {postUrl} = params
    const post = await getPost(postUrl)

    if(post.data.length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'Post No Encontrado'
        })
    }
    
    return postP = post.data[0].attributes
    
}

export function meta({data}) {
    return {
        title: `GuitarLA - ${data.titulo}`,
        description : `Guitarras en venta, guitarra ${data.titulo}`
    }
}

const Post = () => {
    const post = useLoaderData()
    const {titulo, imagen, descripcion, publishedAt} = post
    const publicado = fechaFormato(publishedAt)

  return (
    <article className='contenedor post'>
        <img className='imagen' src={imagen.data.attributes.formats.small.url} alt={`imagen del blog sobre ${titulo}`} />
        <div className='contenido'>

        <h3>{titulo}</h3>
        <p className='fecha'>{publicado}</p>
        <p className='texto'> {descripcion}</p>
        
      </div>
    </article>
  )
}

export default Post