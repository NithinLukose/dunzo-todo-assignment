import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {addTodoTask} from '../actions/todoactions'

function TodoForm() {
    const [task,setTask] = useState('') 

    const taskCount = useSelector(state=>state.todos.taskCount)

    const dispatch = useDispatch()
    const handleTodoSubmit = (e) => {
        e.preventDefault();
        if(task!==''){
            let obj = {
                id:taskCount+1,
                task:task,
                completed:false
            }
            dispatch(addTodoTask(obj))
            setTask('')
        }
    } 

    return (
        <div>
            <form onSubmit={handleTodoSubmit}>
                <input 
                    type='text' 
                    value={task}
                    onChange={(e)=>setTask(e.target.value)}
                />
                <input type='submit' value='submit' />
            </form>
        </div>
    )
}

export default TodoForm
