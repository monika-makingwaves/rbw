import React from 'react';

//import TotoApp from './presentionalComponents/TodoList';
//import todoAppStore from './notes.js';

import Footer from './presentionalComponents/footer';
import AddTodo from './otherComponents/addTodo';
import VisibleTodoList from './containerComponents/visibleTodoList';


class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
        <div>
            <h4>List of todo</h4>
            <AddTodo />
            <VisibleTodoList />
            <Footer />
        </div>

        );
    }
}

export default App;