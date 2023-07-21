import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { todoService } from '../services/todo.service'

export const TodoEdit = ({ onAddTodo }) => {

    const navigate = useNavigate()

    const [todo, setTodo] = useState({ task: '2' })

    const handleChange = (ev) => {
        const value = ev.target.value
        const field = ev.target.name
        const newTodo = { ...todo, [field]: value }
        setTodo(newTodo)
    }



    const onSaveTodo = (ev) => {
        ev.preventDefault()
        todoService.save({ ...todo }).then(() => {
            navigate('/')
        })
    }

    return (
        <section className="todo-edit">
            todo-edit
            <form onSubmit={(ev) => onSaveTodo(ev, todo)}>
                <input
                    onChange={handleChange}
                    value={todo.task}
                    type="text"
                    name="task"
                />
                <button>save</button>
            </form>

        </section>
    )
}
