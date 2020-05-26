import {
ISAUTHENTICATED,
AUTH,
REGISTER_SUCCESS,

} from '../types'

const initialState   = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    user: null,
    loading: true

}


export default (state = initialState, action ) => {
    switch (action.type) {
        case AUTH:
        return {
            ...state,
            isAuthenticated: true
        }
        case REGISTER_SUCCESS: 
        localStorage.setItem('token', action.payload)
        console.log(action.payload)
        return{
            ...state,
            isAuthenticated : true,
            loading : false
        }
        default:
            return state
    }
}