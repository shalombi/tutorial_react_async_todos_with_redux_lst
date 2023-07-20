import { todoService } from "../services/todo.service.js"
import { showErrorMsg } from '../services/event-bus.service.js'

export function loadTodos() {
    return async (dispatch, getState) => {
        try {
            const todos = await todoService.query()
            dispatch({
                type: 'SET_TODOS',
                todos,
            })

        } catch (err) {
            // showErrorMsg('Cannot load elements')
            console.log('Cannot load elements', err)
        }
    }
}



// export function setFilterBy(filterBy) {
//     return (dispatch) => {
//         dispatch({
//             type: 'SET_FILTER_BY',
//             filterBy
//         })
//     }
// }


export function removeTodo(todoId) {
    // console.log(todoId)
    return (dispatch) => {
        todoService.remove(todoId)
            .then(() => {
                dispatch({ type: 'REMOVE_TODO', todoId })
            })
            .catch(err => {
                console.log('err:', err)
            })
    }
}

