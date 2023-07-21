import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export const TodoPreview = ({ todo, onRemoveItem }) => {


    return (
        <section className="todo-preview">
            <h3>{todo.isDone ? '✅' : '📌'} | {todo?.task}  </h3>
            <button onClick={() => onRemoveItem(todo._id)}>x</button>
            <Link to={`/todo/edit/${todo._id}`}>Edit | </Link> 
            <Link to={`/todo/${todo._id}`}>Details</Link>
        </section>
    )
}
