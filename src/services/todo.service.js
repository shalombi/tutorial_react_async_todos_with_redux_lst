import { storageService } from './async-storage.service.js'

export const todoService = {
    query,
    save,
    remove,
    getById,
}

const STORAGE_KEY = 'todos'
const gDefaultTodos = [
    { _id: 't_101', task: 'Wash the dishes', isDone: false, type: 'Housework' },
    { _id: 't_102', task: 'Throw away the garbage', isDone: true, type: 'Housework' },
    { _id: 't_103', task: 'To be happy', isDone: true, type: 'Mentality' }
]

function query(filterBy) {
    return storageService.query(STORAGE_KEY).then(todos => {

        if (!todos || !todos.length) {
            storageService.postMany(STORAGE_KEY, gDefaultTodos)
            todos = gDefaultTodos
        }

        if (filterBy) {
            var { task, type } = filterBy
            todos = todos.filter(todo => todo.task.toLowerCase().includes(task.toLowerCase())
                && todo.type.toLowerCase().includes(type.toLowerCase()))
        }
        // console.log('todos:', todos)
        return todos
    })
}

function getById(todoId) {
    return storageService.get(STORAGE_KEY, todoId)
}

function remove(todoId) {
    return storageService.remove(STORAGE_KEY, todoId)
}

function save(todo) {
    if (todo._id) {
        return storageService.put(STORAGE_KEY, todo)
    } else {
        todo.batteryStatus = 100
        return storageService.post(STORAGE_KEY, todo)
    }
}


