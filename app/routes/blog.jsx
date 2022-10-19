import { useLoaderData, Link } from "@remix-run/react"
import { getPosts } from '~/models/posts.server'
import ListadoPosts from '~/components/listado-posts'
import styleB from '~/styles/blog.css'

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: styleB
    },
  ]
}

export function meta(){
  return{
    title: 'GuitarLA - Nuestro Blog',
    description: 'blogs sobre las guitarras'
  }
}

export async function loader() {
  const posts = await getPosts()
  return postsP = posts.data
}

const Blog = () => {
  const posts = useLoaderData()

  return (
    <main className='contenedor'>
      <ListadoPosts posts={posts}/>
    </main>
  )
}

export default Blog