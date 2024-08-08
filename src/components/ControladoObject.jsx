import { useState } from "react";

const ControladoObject = () => {

    const [error, setError] = useState(false);

    const [todo, setTodo] = useState({
        title: '',
        description: '',
        state: 'pendiente',
        priority: true,
    })
    
    const {title, description, state, priority} = todo;

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación de datos
        if (!title.trim() || !description.trim()) {
            console.log('Campos vacíos');
            setError(true);
            return;
        } else {
            setError(false);
        }

        console.log(title, description, state, priority);

        setTodo({
            title: '',
            description: '',
            state: 'pendiente',
            priority: true,
        })
    }

    const handleChange = (e) => {
       
        // setTodo({...todo, nombrePropiedad: valor})
        //[] por la notacion objeto["nameKey"]

        const { name, checked, type, value } = e.target;

        setTodo({
            ...todo,
            [name]: type === "checkbox" ? checked : value
        })
    }

    const PintarError = () => <div className="alert alert-danger">Todos los campos son obligatorios</div>

    return (
        <form onSubmit={handleSubmit}>
            {error && <PintarError />}
            <input 
                type="text" 
                placeholder="Ingrese Todo" 
                className="form-control mb-2" 
                name="title"
                value={title}
                onChange={ handleChange }
                />
            <textarea  
                className="form-control mb-2" 
                placeholder="Ingrese Descripción" 
                name="description"
                value={description}
                onChange={ handleChange }
            />
            <div className="form-check mb-2">
                <input 
                    type="checkbox" 
                    name="priority" 
                    className="form-check-input" 
                    id="inputCheck" 
                    checked={priority}
                    onChange={handleChange}
                />
                <label htmlFor="inputCheck">Dar prioridad</label>
            </div>
            <select 
                className="form-select mb-2" 
                name="state"
                value={state} 
                onChange={ handleChange }
            >
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>
            <button className="btn btn-primary" type="submit">Procesar</button>
        </form>
    )
}

export default ControladoObject