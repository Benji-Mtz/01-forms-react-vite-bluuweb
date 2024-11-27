import PropTypes from 'prop-types';
import Swal from "sweetalert2";
import { useState } from "react";

const Formulario = ({addTodo}) => {

    const [todo, setTodo] = useState({
        title: "Todo #01",
        description: "Descripción #01",
        state: "pendiente",
        priority: true,
    })
    
    const {title, description, state, priority} = todo;

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación de datos
        if (!title.trim() || !description.trim()) {
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Titulo y descripción obligatorios",
              });
        }


        addTodo({
            id: Date.now(), // se agrega un ID 
            ...todo, // Copia el todo completo
            state: state === 'completado' // Se obvia esto ? true: false y se cambia el string a boolean
        })

        Swal.fire({
            position: "center",
            icon: "success",
            title: "Tarea agregada con éxito",
            showConfirmButton: false,
            timer: 1500,
        });
        
        console.log(title, description, state, priority);
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

    return (
        <form onSubmit={handleSubmit}>
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
            <button className="btn btn-primary" type="submit">Agregar Todo</button>
        </form>
    )
}

Formulario.propTypes = {
    addTodo: PropTypes.func
};

export default Formulario