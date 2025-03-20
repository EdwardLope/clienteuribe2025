export async function ServicoLogistico() {

    //Construir el enpoint
    const URL="htpp://localhost/logistica"

    //Activar la peticion a enviar 
    let peticion={
        method:"GET"

    }

    //Activo el consumo de la peticion
    let respuesta=await fetch(URL,peticion)
    let logisticaConsultados=await respuesta.json()

    return logisticaConsultados



}