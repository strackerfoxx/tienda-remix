export async function getGuitarras() {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
    return await respuesta.json()
}

export async function getGuitarra(id) {
    const respuesta = await fetch(`http://localhost:1337/api/guitarras?filters[id]=${id}&populate=imagen`);
    return await respuesta.json()
}