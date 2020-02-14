// Types
import { FORM_TOGGLE, FORM_TYPE_TOGGLE } from '../actions/types'

const initialState = {
    formActive: false,
    formType: false, // False if Login, True if Register
}

export default function(state=initialState, action) {
    switch(action.type){
        case FORM_TOGGLE:
            return {
                ...state,
                formActive: !state.formActive,
            }
        case FORM_TYPE_TOGGLE:
            return {
                ...state,
                formType: !state.formType,
            }
        default:
            return {
                ...state
            };
    }
}