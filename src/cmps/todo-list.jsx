import React, { useEffect } from 'react'
import { TodoPreview } from './todo-preview'
export const TodoList = ({ todos }) => {

    useEffect(() => {
        console.log(todos, 'todos')
    }, [todos])

    return (
        <section className="todo-list">

            {todos.map(todo => < TodoPreview todo={todo} key={todo._id} />)}
        </section>
    )
}
