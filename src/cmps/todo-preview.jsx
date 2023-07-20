import React, { useEffect } from 'react'

export const TodoPreview = ({ todo }) => {


    return (
        <section className="todo-preview">
            <h3>{todo?.task}</h3>
        </section>
    )
}
