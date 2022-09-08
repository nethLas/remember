const INITIAL_STATE = {
    // loggedInUser: {
    //     username,
    //     email
    // }
    heroes: []
}

export function userReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                loggedInUser: action.user
            }
        case 'SET_HEROES':
            return {
                ...state,
                heroes: action.heroes
            }
        default:
           return state
    }
}