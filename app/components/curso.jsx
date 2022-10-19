import React from 'react'
import {fechaFormato} from '~/utils/helpers'

const Curso = ({curso}) => {
    const {titulo, contenido, imagen, publishedAt} = curso
    const publicado = fechaFormato(publishedAt)

  return (
    <section className="curso">
        <style jsx>
            {`
            .curso{
                background-image: linear-gradient( to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7) ), url(${imagen.data.attributes.url})
            }
            `}
        </style>
        <div className='contenedor curso-grid' >
            <div className='contenido'>
                <h2 className='heading'>{titulo}</h2>
                <p className='texto'>{contenido}</p>
                <p>{publicado}</p>
            </div>
            {/* /* <img className='imagen' src={imagen.data.attributes.formats.small.url} 
            alt={`imagen del curso sobre ${titulo}`} /> */}
            
        </div>
        
    </section>
  )
}

export default Curso