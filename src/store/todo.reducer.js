const initialState = {
    todos: [],

    filterBy: {},
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

        case 'CHANGE_PAGE':
            newState = { ...state, pageIdx: state.pageIdx + action.diff }
            break

        case 'SET_PAGE':
            newState = { ...state, pageIdx: action.pageIdx }
            break

        case 'SET_FILTER_BY':
            newState = { ...state, category: { ...state.category, type: action.filterBy.category, filterBy: action.filterBy } }
            break

        case 'REMOVE_ELEMENT':
            return {
                ...state,
                elements: state.elements.filter(element => element._id !== action.elementId)
            }
        default:
    }
    return newState

}


