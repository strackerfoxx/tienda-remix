import {Link, useLocation} from '@remix-run/react'
import logo from '../../public/img/logo.svg'
import Navegacion from "./navegacion"

const Header = () => {
  return (
    <div className='header'>
        <div className="contenedor barra">
            <div className="logo">
                <Link to='/'><img src={logo} alt="Logotipo" /></Link>
            </div>
            
            <Navegacion />
        </div>
    </div>
  )
}

export default Header