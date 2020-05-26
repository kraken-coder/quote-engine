import {
ISAUTHENTICATED,
AUTH
} from '../types'

const initialState   = {
    token: localStorage.getItem('token'),
    isAuthenticated: false
}


export default (state = initialState, action ) => {
    switch (action.type) {
        case AUTH:
        return {
            ...state,
            isAuthenticated: true
        }
        default:
            return state
    }
}