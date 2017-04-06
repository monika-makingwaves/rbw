/*
* State shape as a single object
* */



const todoAppStore = {
    visibilityFilter: 'SHOW_ALL',
    todos: [
        {
            id: 1,
            text: 'Learn redux',
            completed: false
        },
        {
            id: 2,
            text: 'learn react',
           completed: true
        }
    ]
};
 
export default todoAppStore;