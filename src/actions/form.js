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

export const scrollType = (formActive) => {
    let body = document.getElementsByTagName('body')[0];
    if(formActive){
        body.style.overflow = 'initial';
    } else {
        body.style.overflow = 'hidden';
    }
}