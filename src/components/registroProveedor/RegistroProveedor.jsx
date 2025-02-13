export function RegistroProveedor (){


return(

    <>
    
    <form className="border rounded" action="">

        <div className="mb-3">
            <input type="text" className="form-control" placeholder="Nombres"/>
        </div>

        <div className="mb-3">
            <input type="text" className="form-control" placeholder="Documentos"/>
        </div>

        <div className="mb-3">
            <input type="text" className="form-control" placeholder="Direccion"/>
        </div>

        <div className="mb-3">
            <input type="text" className="form-control" placeholder="Ciudad"/>
        </div>

        <div className="mb-3">
            <input type="" className="form-control" placeholder="Representante"/>
        </div>

        <div className="mb-3">
            <input type="text" className="form-control" placeholder="Telefono contacto"/>
        </div>

        <div className="mb-3">
            <input type="email" className="form-control" placeholder="Correo"/>
        </div>

        <div className="mb-3">
            <input type="date" className="form-control" placeholder="Fecha de Envio"/>
        </div>

        <div className="mb-3">
            <input type="text" className="form-control" placeholder="Costo de envio"/>
        </div>

        <div className="mb-3">
            <textarea type="text" className="form-control" placeholder="Descripcion"/>
        </div>

        <button className="btn btn-primary w-100">Enviar</button>

    </form>
    
    </>





)

}