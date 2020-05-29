import { combineReducers } from 'redux'

import authReducer from './authReducer'
import dataReducer from './dataReducer'
import user from './User'

export default combineReducers({
  auth: authReducer,
  user: user,
  data: dataReducer,
})
