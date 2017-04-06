import React, { PropTypes } from 'react';
import Todo from './todo';

class TodoList extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const todos = this.props.todos;
        const listOfElements =  todos.map((todo) =>
            <Todo key={todo.id} onClick={()=> this.props.onTodoClick(todo.id)} completed={todo.completed} text={todo.text} />
        );

        return (
            <ul>{listOfElements}</ul>
        );
    }
}

TodoList.propTypes = {
    onTodoClick: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired
};

export default TodoList;