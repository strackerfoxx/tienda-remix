import { useLoaderData } from '@remix-run/react'
import {getGuitarras} from '~/models/guitarras.server'
import {getPosts} from '~/models/posts.server'
import {getCurso} from '~/models/curso.server'

import ListadoGuitarras from "~/components/listado-guitarras"
import ListadoPosts from '~/components/listado-posts'
import Curso from '~/components/curso'

export function meta(){
  return{
    title: 'GuitarLA - Pagina Principal',
    description: 'tienda de guitarras'
  }
}

export async function loader(){
  const [guitarras, posts, curso] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso()
  ])

  return {
    guitarras: guitarras.data,
    posts: posts.data,
    curso: curso.data.attributes,
  }
}

const Index = () => {
  const {guitarras, posts, curso} = useLoaderData()

  return (
    <>
      <main className='contenedor'>
        <ListadoGuitarras guitarras={guitarras} />
      </main>

      <Curso curso={curso}/>

      <section className='contenedor'>
        	<ListadoPosts posts={posts}/>
      </section>

    </>
  )
}

export default Index