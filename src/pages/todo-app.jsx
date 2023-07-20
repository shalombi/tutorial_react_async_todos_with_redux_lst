import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { loadElements, changePageIdx, setPage, removeElement } from '../store/element.actions.js'

export const TodoApp = () => {
    const dispatch = useDispatch()
    const { todos} = useSelector(state => state.elementModule)

    useEffect(() => {
        
    }, [])


    if (!elements) return <h1>Loading...</h1>
    return (
        <section>
            <h3>Todo App</h3>

            <main>
              
            </main>
        </section >
    )
}

