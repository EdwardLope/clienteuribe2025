export async function ServicoProveedor() {

    //Construir el enpoint
    const URL="htpp://localhost/proveedor"

    //Activar la peticion a enviar 
    let peticion={
        method:"GET"

    }

    //Activo el consumo de la peticion
    let respuesta=await fetch(URL,peticion)
    let proveedoresConsultados=await respuesta.json()

    return proveedoresConsultados



}