import { useState } from "react";

const ControladoStates = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [state, setState] = useState('pendiente');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title, description, state);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Ingrese Todo" 
                className="form-control mb-2" 
                value={title}
                onChange={ e => setTitle(e.target.value)}
                />
            <textarea  
                className="form-control mb-2" 
                placeholder="Ingrese Descripción" 
                value={description}
                onChange={ e => setDescription(e.target.value)}
                />
            <select className="form-select mb-2" value={state} onChange={ e => setState(e.target.value)}>
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>
            <button className="btn btn-primary" type="submit">Procesar</button>
        </form>
    )
}

export default ControladoStates