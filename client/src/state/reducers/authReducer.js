import {
ISAUTHENTICATED,
AUTH,
REGISTER_SUCCESS,
USER_LOGGED,
AUTH_ERROR,
REGISTER_FAIL,
LOGIN_SUCCESS,
LOGIN_FAIL

} from '../types'

const initialState   = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    user: null,
    loading: true,
    error: null

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
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload)
        return{
            ...state,
            isAuthenticated : true,
            loading : false,
            
        }
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case REGISTER_FAIL: 
        localStorage.removeItem('token')
        return {
            ...state, 
            token: null,
            isAuthenticated: false,
            user: null,
            loading: true,
            error: action.payload
        }
        default:
            return state
    }
}