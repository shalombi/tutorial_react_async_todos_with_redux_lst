import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TodoList } from '../cmps/todo-list.jsx'
import { TodoEdit } from './todo-edit.jsx'

import { loadTodos, removeTodo } from '../store/todo.actions.js'
import { Link } from 'react-router-dom'

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

    // const onAddTodo = (ev, todo) => {
    //     ev.preventDefault()
    //     console.log(todo)
    //     // dispatch(saveTodo())
    // }

    return (
        <section>
            <h3>Todo App</h3>

            <main>
                <Link to='/todo/edit'>Add</Link>
                {/* <TodoEdit onAddTodo={onAddTodo} /> */}
                <TodoList
                    todos={todos}
                    onRemoveItem={onRemoveItem}
                />


            </main>
        </section >
    )
}

