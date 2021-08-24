export const ADD_TODO_TASK = 'ADD_TODO_TASK';
export const DELETE_TASK = 'DELETE_TASK'
export const MOVE_TO_COMPLETED = 'MOVE_TO_COMPLETED';
export const CHANGE_TAB = 'CHANGE_TAB'
export const UPDATE_TODO = 'UPDATE_TODO'


export const addTodoTask = (data) => ({
    type:ADD_TODO_TASK,
    payload:data
})

export const deleteTask = (id) => ({
    type:DELETE_TASK,
    payload:id
})

export const moveToCompleted = (id) => ({
    type:MOVE_TO_COMPLETED,
    payload:id
})

export const changeTab = (tabName) => ({
    type:CHANGE_TAB,
    payload:tabName
})

export const updateTodo = (task,id) => ({
    type:UPDATE_TODO,
    id:id,
    task:task
})

