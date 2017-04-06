import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class AddTodo extends React.Component {
    constructor(props) {
        super(props);

        console.log(props);

        this.input = null;

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        if(!this.input.value.trim()) {
            return
        }

        this.props.dispatch(addTodo(this.input.value));
        this.input.value = '';

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref={node => {
                        this.input = node
                    }} />
                    <button type="submit">Add Todo</button>
                </form>
            </div>
        );
    }
}


AddTodo = connect()(AddTodo);

export default AddTodo;