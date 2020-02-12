// Types
import { FORM_TOGGLE, FORM_TYPE_TOGGLE } from './types'

// Changes Header Text
export const formToggle = () => (dispatch) => {
    dispatch({
        type: FORM_TOGGLE,
    }) 
}

export const formTypeToggle = () => (dispatch) => {
    dispatch({
        type: FORM_TYPE_TOGGLE,
    })
}