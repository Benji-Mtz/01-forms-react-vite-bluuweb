// import NoControlado from "./components/NoControlados";
// import ControladoStates from "./components/ControladoStates";
// import ControladoObject from "./components/ControladoObject"
import { useState } from "react"
import Formulario from "./components/Formulario"
import Todos from "./components/Todos";

const initialStateTodos = [
  {
    id: 1,
    title: "Todo #01",
    description: "Descripción #01",
    state: true,
    priority: true,
  },
  {
    id: 2,
    title: "Todo #02",
    description: "Descripción #02",
    state: false,
    priority: false,
  },
  {
    id: 3,
    title: "Todo #03",
    description: "Descripción #03",
    state: true,
    priority: true,
  },
];

const App = () => {

  // State de funciones de la app ToDo
  const [todos, setTodos] = useState(initialStateTodos);

  const addTodo = todo => {
    setTodos([...todos, todo]);
  }

  return (
    <div className="container">
      <h1>Formularios</h1>

      <Formulario addTodo={addTodo} />
      <Todos todos={todos} />

    </div>
  )
}

export default App
