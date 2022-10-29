import { Outlet, useOutletContext } from "@remix-run/react"

const Tienda = () => {

  return (
    <main className="contenedor">
      <Outlet context={useOutletContext()}/>
    </main>
  )
}

export default Tienda