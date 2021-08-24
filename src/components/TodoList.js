import React,{useState} from 'react'
import {deleteTask,moveToCompleted, updateTodo} from '../actions/todoactions'
import {useSelector,useDispatch} from 'react-redux'
import placeHolderImg from '../assets/images/placeholder.png'
import PenidngList from './PenidngList'
import CompletedList from './CompletedList'

function TodoList() {

    const [task,setTask] = useState('')
    const [editId,setEditId] = useState(-1)
    const todoList = useSelector(state=>state.todos.todoList)
    const tabName = useSelector(state => state.todos.tabName)
    const dispatch = useDispatch()

    const deleteTodo = (id) => {
        dispatch(deleteTask(id))
    }

    const completeTodo = (id) => {
        dispatch(moveToCompleted(id))
    }

    const editTask = (todo,id) => {
        setTask(todo.task)
        setEditId(id)
    }

    const updateTask = (id) => {
        
        dispatch(updateTodo(task,id))
        setEditId(-1)
    }


    if(todoList.length === 0){
        return (
            <div>
                <img src={placeHolderImg} alt='placeholder'/>
            </div>
        )
    }
    if(tabName === 'Pending'){
        return (
            <PenidngList />
        )
    }
    if(tabName === 'Completed'){
        return (
            <CompletedList />
        )
    }
    return (
        <div>
            {
                todoList.map(todo=>(
                    <div key={todo.id}>
                        <input 
                            value={editId!==todo.id?todo.task:task} 
                            disabled={editId===todo.id?false:true} 
                            onChange={(e)=>setTask(e.target.value)}
                        />
                        <p>{todo.completed?'Completed':'Pending'}</p>
                        {
                            editId!==todo.id&&(
                                <button onClick={()=>editTask(todo,todo.id)}>edit</button>
                            )
                        }
                        {
                            editId===todo.id&&(
                                <button onClick={()=>updateTask(todo.id)}>Update</button>
                            )
                        }
                        <button onClick={()=>completeTodo(todo.id)}>Complete</button>
                        <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
                        
                    </div>
                ))
            }
        </div>
    )
}

export default TodoList
