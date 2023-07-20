import React, { useEffect } from 'react'
import { TodoPreview } from './todo-preview'
export const TodoList = ({ todos, onRemoveItem }) => {

    useEffect(() => {
        console.log(todos, 'todos')
    }, [todos])

    return (
        <section className="todo-list">
            
            {todos.map(todo => < TodoPreview
                onRemoveItem={onRemoveItem}
                todo={todo}
                key={todo._id}
            />

            )}
        </section>
    )
}
