import {Link, useLocation} from '@remix-run/react'

const Navegacion = () => {
    const Location = useLocation()
    const locate = Location.pathname
    
  return (
    <nav className="navegacion">
        <Link className={`${locate === '/' && 'text-prime'}`} 
        to='/'
        >
        Inicio</Link>

        <Link to='/guitarras' className={`${locate === '/tienda' && 'text-prime'}`} 
        >
        Tienda</Link>

        <Link to='/blog' className={`${locate === '/blog' && 'text-prime'}`} 
        >
        Blog</Link>

        <Link to='/nosotros' className={`${locate === '/nosotros' && 'text-prime'}`} 
        >
        Nosotros</Link>
        
    </nav>
  )
}

export default Navegacion