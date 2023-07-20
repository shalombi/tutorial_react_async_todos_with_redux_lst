import React, { useEffect } from 'react'

export const TodoPreview = ({ todo, onRemoveItem }) => {


    return (
        <section className="todo-preview">
            <h3>{todo.isDone ? '✅' : '📌'} | {todo?.task}  </h3>
            <button onClick={() => onRemoveItem(todo._id)}>x</button>
        </section>
    )
}
