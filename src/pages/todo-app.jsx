import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TodoList } from '../cmps/todo-list.jsx'

import { loadTodos, removeTodo } from '../store/todo.actions.js'

export const TodoApp = () => {
    const dispatch = useDispatch()
    const { todos } = useSelector(state => state.todoModule)



    useEffect(() => {
        dispatch(loadTodos())
    }, [])

    useEffect(() => {
        console.log('todos:', todos)
    }, [todos])


    const onRemoveItem = (todoId) => {
        console.log('remove')
        console.log('todoId:', todoId)
        dispatch(removeTodo(todoId))
    }

    return (
        <section>
            <h3>Todo App</h3>

            <main>
                <TodoList
                    todos={todos}
                    onRemoveItem={onRemoveItem}
                />


            </main>
        </section >
    )
}

