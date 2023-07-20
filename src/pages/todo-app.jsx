import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TodoList } from '../cmps/todo-list.jsx'

import { loadTodos } from '../store/todo.actions.js'

export const TodoApp = () => {
    const dispatch = useDispatch()
    const { todos } = useSelector(state => state.todoModule)



    useEffect(() => {
        dispatch(loadTodos())
    }, [])

    useEffect(() => {
        // console.log('todos:', todos)
    }, [todos])

    // if (!todos) return <h1>Loading...</h1>
    return (
        <section>
            <h3>Todo App</h3>

            <main>
                {/* {todos.map(t => <h1>{t.task}</h1>)} */}

                <TodoList todos={todos} />
            </main>
        </section >
    )
}

