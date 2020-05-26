import { combineReducers} from 'redux'

import authReducer from './authReducer'
import user from './User'

export default combineReducers({
    auth: authReducer,
    user: user
})





