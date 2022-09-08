// export function setUser(user) {
//     return async (dispatch) => {
//         dispatch({ type: 'SET_USER', user})
//     }
// }

export function setStories(heroes) {
    return async (dispatch) => {
        dispatch({ type: 'SET_HEROES', heroes})
    }
}
