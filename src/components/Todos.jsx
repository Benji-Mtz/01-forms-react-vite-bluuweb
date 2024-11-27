import PropTypes from 'prop-types';

const Todos = ({ todos }) => {


  return (
    <div className="mt-5">
        <h2 className="text-center">ToDos</h2>
        <ul>
            {
                todos.map(todo => (
                        <li key={todo.id}>{ todo.title }</li>
                    ))
            }
        </ul>
    </div>
  )
}

Todos.propTypes = {
    todos: PropTypes.array
};

export default Todos