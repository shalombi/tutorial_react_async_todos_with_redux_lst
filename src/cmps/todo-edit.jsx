import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { todoService } from '../services/todo.service'

export const TodoEdit = () => {

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

    const handleChange = (ev) => {
        const value = ev.target.value
        const field = ev.target.name
        const newTodo = { ...todo, [field]: value }
        setTodo(newTodo)
    }



    const onSaveTodo = (ev) => {
        ev.preventDefault()
        todoService.save({ ...todo }).then(() => {
            navigate('/todo')
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
