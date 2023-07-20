import { HomePage } from './pages/home-page.jsx'
import { TodoApp } from './pages/todo-app.jsx'

const routes = [
    {
        path: '/',
        component: <HomePage />,
        label: 'Home 🏠',
    },
    {
        path: 'element',
        component: <TodoApp />,
        label: 'Elements'
    },
  

]

export default routes