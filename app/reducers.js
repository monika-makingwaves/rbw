import { combineReducers } from 'redux';

import {ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters} from './actions';

const { SHOW_ALL } = VisibilityFilters;

let initTodo = [
    {
        text: 'lear react js',
        completed: true,
        id: 0
    },
    {
        text: 'learn redux',
        completed: false,
        id: 1
    }
];


function todos(state = initTodo, action){
    switch (action.type){
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false,
                    id: state.length
                }
            ];
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }

                return todo;
            });

        default:
            return state
    }
}

function visibilityFilter(state = SHOW_ALL, action){
    switch (action.type){
        case SET_VISIBILITY_FILTER:
            return action.filter;

        default:
            return state;
    }
}

const todoApp = combineReducers({
    visibilityFilter,
    todos
});

export default todoApp;