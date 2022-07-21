import React from 'react'
import ReactSwitch from 'react-switch'


export default function AddForm({ Add }) {
     
    const [Importante, setImportante] = React.useState(false)
    const [Titulo, setTitulo] = React.useState("")
    const [Descripcion, setDescripcion] = React.useState("")


    const inputTitulo = React.useRef(null);
    const inputDesc = React.useRef(null);


    const ToggleImportante = () =>{
        setImportante(!Importante)
    }

    const ResetInputs = () =>{
        inputTitulo.current.value = ""
        inputDesc.current.value = ""
    }


    return (
    <div className="row justify-content-center m-2 p-2">
        <div className="col-md-4 m-2 p-2 text-center">
        <form onSubmit={() => {return false}}>
            <div className="mb-3">
                <input onChange={ (e) => { setTitulo(e.target.value)} }
                type="text" className="form-control text-center" placeholder="Titulo" ref={inputTitulo}/>
            </div>
            <div className="mb-3">
                <input onChange={ (e) => { setDescripcion(e.target.value)} }
                type="text" className="form-control text-center" placeholder="Detalle" ref={inputDesc} />
            </div>
            <div>
                Marca si es Importante
            </div>
            <div className="mb-3">
                <ReactSwitch  
                    onChange={ ()=> ToggleImportante() } 
                    checked={ Importante }
                    height={20}
                    width={40}
                />
            </div>
            <button onClick={ () => (Add(Titulo, Descripcion, Importante), ResetInputs()) }
            type="button" className="btn btn-primary col-12">Agregar Post It</button>
        </form>
    </div>
    </div>
    

    )
};
