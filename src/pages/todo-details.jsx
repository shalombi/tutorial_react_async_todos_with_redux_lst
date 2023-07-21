import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { todoService } from '../services/todo.service'

export const TodoDetails = () => {

    const navigate = useNavigate()
    const params = useParams()

    const [todo, setTodo] = useState({ task: '2' })

    useEffect(() => {
        loadTodo()
    }, [])

    const loadTodo = async () => {
        const todo = await todoService.getById(params.id)
        if (todo) {
            setTodo({ ...todo })
        }
        console.log(todo)
    }

    const onBack = () => {
        navigate('/todo')
    }

    return (
        <section className="todo-edit">
            <h1>{todo.task}</h1>
            <h3>{todo.isDone ? '✅' : '📌'} | {todo?.task}  </h3>

            <button onClick={onBack}>back</button>
        </section>
    )
}
