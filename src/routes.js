import { HomePage } from './pages/home-page.jsx'
import { TodoApp } from './pages/todo-app.jsx'

const routes = [
    {
        path: '/',
        component: <HomePage />,
        label: 'Home 🏠',
    },
    {
        path: 'todo',
        component: <TodoApp />,
        label: 'Todos'
    },


]

export default routes