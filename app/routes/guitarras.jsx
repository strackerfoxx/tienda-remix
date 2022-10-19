import { Outlet } from "@remix-run/react"

const Tienda = () => {

  return (
    <main className="contenedor">
      <Outlet/>
    </main>
  )
}

export default Tienda