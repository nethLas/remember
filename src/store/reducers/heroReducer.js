const INITIAL_STATE = {
    heroes: []
}

export function heroReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_HEROES':
            return {
                ...state,
                heroes: action.heroes
            }
        default:
           return state
    }
}