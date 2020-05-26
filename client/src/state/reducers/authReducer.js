import {
ISAUTHENTICATED,
AUTH,
REGISTER_SUCCESS,
USER_LOGGED,
AUTH_ERROR,
REGISTER_FAIL

} from '../types'

const initialState   = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    user: null,
    loading: true

}


export default (state = initialState, action ) => {
    switch (action.type) {
       
        case REGISTER_SUCCESS: 
        localStorage.setItem('token', action.payload)
        return{
            ...state,
            isAuthenticated : true,
            loading : false,
        }

        case USER_LOGGED:  
        console.log(action.payload)

        return {
            ...state,
            isAuthenticated: true,
            loading: false,
            user: action.payload
        }

        case AUTH_ERROR:
        case REGISTER_FAIL: 
        localStorage.removeItem('token')
        return {
            ...state, 
            token: null,
            isAuthenticated: false,
            user: null,
            loading: true
        }
        default:
            return state
    }
}