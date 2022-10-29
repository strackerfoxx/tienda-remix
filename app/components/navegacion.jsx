import {Link, useLocation} from '@remix-run/react'
import imgCart from '~/../public/img/carrito.png'

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
        <Link to='/carrito' className='cart'><img src={imgCart} alt="imagen de un carrito de compras" /></Link>
        
    </nav>
  )
}

export default Navegacion