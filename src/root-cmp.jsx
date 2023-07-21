import React from 'react'

// const { Switch, Route } = ReactRouterDOM
import { Routes, Route } from 'react-router'

import routes from './routes'
import { AppHeader } from './cmps/app-header'
import { TodoDetails } from './pages/todo-details'
import { TodoEdit } from './pages/todo-edit'

import './App.css'

export function RootCmp() {
  return (
    <section>
      <AppHeader />
      <main>
        <Routes>
          {routes.map(route => <Route key={route.path} exact={true} element={route.component} path={route.path} />)}
          <Route path='/todo/edit/:id' element={<TodoEdit />} />
          <Route path='/todo/edit' element={<TodoEdit />} />
          <Route path='/todo/:id' element={<TodoDetails />} />
        </Routes>
      </main>
    </section>
  )
}



