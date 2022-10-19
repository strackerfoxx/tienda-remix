import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export const meta = () => ({
  title: "GuitarLA - Nosotros",
});

export function links() {
  return[
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

const Nosotros = () => {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido" > 
        <img src={imagen} alt="imagen sobre nosotros" />
          <div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel aliquid in ducimus. Repellendus quos 
              quaerat dignissimos delectus reprehenderit. Ipsa ad dolore sapiente quam doloribus iusto 
              inventore ducimus veniam minima odio.
            </p>

            <p>
            Nullam quis eleifend purus. Pellentesque elementum lorem tellus, eu ultrices risus volutpat sit amet. Morbi vitae gravida massa. 
            Mauris mollis auctor tortor nec tristique. Ut eget quam sit amet sem tristique euismod quis id lectus. Etiam tristique augue a mattis 
            consequat. Cras id odio at lectus dictum posuere vitae non est. Curabitur in tellus egestas, faucibus magna sed, feugiat elit. Pellentesque 
            tempus nisl magna, vel accumsan mauris pretium non. Suspendisse potenti. 
            </p>
          </div>
      </div>
    </main>
  )
}

export default Nosotros