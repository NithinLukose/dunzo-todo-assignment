import {
    ADD_TODO_TASK,
    DELETE_TASK,
    MOVE_TO_COMPLETED,
    CHANGE_TAB,
    UPDATE_TODO
} from '../actions/todoactions'
const initialState = {
    taskCount:0,
    todoList:[],
    tabName:'All'
}

const todos = (state = initialState,action)=>{
    switch(action.type){
        case ADD_TODO_TASK:
            return {
                ...state,
                taskCount:state.taskCount+1,
                todoList:state.todoList.concat(action.payload)
            }
        case DELETE_TASK:
            return {
                ...state,
                taskCount:state.taskCount-1,
                todoList:state.todoList.filter(todo=>todo.id!==action.payload)
            }
        case MOVE_TO_COMPLETED:
            return {
                ...state,
                todoList:state.todoList.map(todo=>{
                    if(todo.id === action.payload){
                        todo.completed=true;
                    }
                    return todo;
                })
            }
        case CHANGE_TAB:
            return {
                ...state,
                tabName:action.payload
            }
        case UPDATE_TODO:
            return {
                ...state,
                todoList:state.todoList.map(todo=>{
                    if(todo.id===action.id){
                        todo.task = action.task
                    }
                    return todo;
                })
            }
        default:
            return state;
    }
}

export default todos;