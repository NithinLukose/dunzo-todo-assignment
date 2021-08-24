import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {deleteTask} from '../actions/todoactions'


function CompletedList() {
    const todoList = useSelector(state=>state.todos.todoList)
    const dispatch = useDispatch()
    const deleteTodo = (id) => {
        dispatch(deleteTask(id))
    }
    return (
        <div>
            {
                todoList.filter(todo=>todo.completed).map(todo=>(
                    <div key={todo.id}>
                        <p>{todo.task}</p>
                        <p>{todo.completed?'Completed':'Pending'}</p>
                        <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
                    </div>
                ))
            }
        </div>
    )
}

export default CompletedList
