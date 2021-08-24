import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {deleteTask,moveToCompleted} from '../actions/todoactions'

function PenidngList() {
    const todoList = useSelector(state=>state.todos.todoList)
    const dispatch = useDispatch()
    

    const deleteTodo = (id) => {
        dispatch(deleteTask(id))
    }
    const completeTodo = (id) => {
        dispatch(moveToCompleted(id))
    }
    return (
        <div>
            {
                todoList.filter(todo=>!todo.completed).map(todo=>(
                    <div key={todo.id}>
                        <p>{todo.task}</p>
                        <p>{todo.completed?'Completed':'Pending'}</p>
                        <button>edit</button>
                        <button onClick={()=>completeTodo(todo.id)}>Complete</button>
                        <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
                    </div>
                ))
            }
        </div>
    )
}

export default PenidngList
