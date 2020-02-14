// Types
import { LOCATION_UPDATE } from '../actions/types'

export const getLocation = () => (dispatch) => {
    navigator.geolocation.getCurrentPosition((position) => {
        dispatch({
            type: LOCATION_UPDATE,
            payload: position.coords
        })
    });
}