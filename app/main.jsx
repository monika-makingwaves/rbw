import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';
import App from './app';

/*

import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from './actions';
import store from './index.js';

console.log(store.getState());

let unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
});


store.dispatch(addTodo('lern about actions'));
store.dispatch(addTodo('lern about reducers'));
store.dispatch(addTodo('lear more about redux'));
store.dispatch(toggleTodo(1));
store.dispatch(setVisibilityFilter('SHOW_COMPLETED'));
store.dispatch(setVisibilityFilter('SHOW_ALL'));


unsubscribe();*/

let store = createStore(todoApp);
console.log(store.getState());

export default class MeinComponent extends React.Component {
    render(){
        return(
            <Provider store={store} >
                <App />
            </Provider>
        );
    }
}
ReactDOM.render(<MeinComponent />, document.getElementById('todoApp'));