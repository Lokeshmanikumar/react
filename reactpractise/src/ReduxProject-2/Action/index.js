export const Increment = (value) => async dispatch => {
    dispatch({
        type:"INCREMENT",
        payload:value
    })
}

export const Decrement = () => async dispatch => {
    dispatch({
        type:"DECREMENT"
    })
} 