import { useRef, useState } from "react";

const NoControlado = () => {

    const [error, setError] = useState("");

    const form = useRef(null);

    // para form-data necesitamos name en los campos
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(form.current);
        setError('');

        // Capturar los datos
        const data = new FormData(form.current);
        console.log([...data.entries()]);

        // El método Object.fromEntries() transforma una lista de pares con [clave-valor] en un objeto.
        const { title, description, state } = Object.fromEntries([...data.entries()]);
        
        // validar los datos
        if (!title.trim() || !description.trim() || !state.trim()) return setError("Llena todos los campos");
        
        // Enviar los datos 
        console.log(title, description, state);
    }



    return (
        <form onSubmit={handleSubmit} ref={form}>
            <input 
                type="text" 
                placeholder="Ingrese Todo" 
                className="form-control mb-2" 
                name="title"
                defaultValue={"todo #1"}
            />
            <textarea  
                className="form-control mb-2" 
                placeholder="Ingrese Descripción" 
                name="description"
                defaultValue={"descripcion #1"}
            />
            <select className="form-select mb-2" name="state" defaultValue={"completado"}>
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>
            <button className="btn btn-primary" type="submit">Procesar</button>
            {
                // error != '' ? error : "No hay errores"
                error != "" && error
            }
        </form>
    )
}

export default NoControlado