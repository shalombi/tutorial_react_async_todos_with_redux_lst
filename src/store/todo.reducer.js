const initialState = {
    todos: [],
    filterBy: null,

    pageIdx: 1,
    totalPages: '',
    category: { type: '' },
}
export function todoReducer(state = initialState, action) {
    var newState = state
    switch (action.type) {

        case 'SET_TODOS':
            newState = { ...state, todos: action.todos }
            break

        case 'REMOVE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo._id !== action.todoId)
            }

        case 'SET_FILTER_BY':
            newState = { ...state, filterBy: action.filterBy }
            break


        case 'CHANGE_PAGE':
            newState = { ...state, pageIdx: state.pageIdx + action.diff }
            break

        case 'SET_PAGE':
            newState = { ...state, pageIdx: action.pageIdx }
            break


        default:
    }
    return newState

}


