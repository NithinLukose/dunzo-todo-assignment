import React from 'react'
import {
    useDispatch,
    useSelector
} from 'react-redux'
import {changeTab} from '../actions/todoactions'



function TodoTab() {

    const tabName = useSelector(state => state.todos.tabName)
    const dispatch = useDispatch()
    const change = (name) => {
        dispatch(changeTab(name))
    }

    return (
        <div>
            <div>
                <button 
                    onClick={()=>change('All')} 
                    style={{
                        color:tabName === 'All'?'blue':'black'
                    }}
                >
                    ALL
                </button>
                <button 
                    onClick={()=>change('Pending')} 
                    style={{
                        color:tabName === 'Pending'?'blue':'black'
                    }}
                >
                    PENDING
                </button>
                <button 
                    onClick={()=>change('Completed')} 
                    style={{
                        color:tabName === 'Completed'?'blue':'black'
                    }}
                >
                    COMPLETED
                </button>
            </div>
        </div>
    )
}

export default TodoTab
