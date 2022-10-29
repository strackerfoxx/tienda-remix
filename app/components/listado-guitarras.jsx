import Guitarra from '~/components/guitarra'

const ListadoGuitarras = ({guitarras}) => {
  
  return (
    <>
        <h2 className="heading">Nuestra Coleccion de Guitarras</h2>
        {guitarras?.length > 0 && (
            <div className="guitarras-grid">
                {guitarras.map( guitarra => (
                <Guitarra guitarra={guitarra?.attributes} key={guitarra?.id} id={guitarra?.id} />
                ))}
            </div>
        )}
    </>
  )
}

export default ListadoGuitarras