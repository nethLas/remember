export function setStories(heroes) {
    return async (dispatch) => {
        dispatch({ type: 'SET_HEROES', heroes})
    }
}
