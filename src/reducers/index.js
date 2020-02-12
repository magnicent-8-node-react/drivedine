// Native Imports
import { combineReducers } from 'redux';

// Reducers
import auth from './auth'
import form from './form'

export default combineReducers({
    auth,
    form,
});