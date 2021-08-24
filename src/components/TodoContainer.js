import React from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import TodoTab from './TodoTab'

function TodoContainer() {
    return (
        <div>
            <TodoForm />
            <TodoTab />
            <TodoList />
        </div>
    )
}

export default TodoContainer
