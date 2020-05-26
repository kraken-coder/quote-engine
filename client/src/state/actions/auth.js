import axios from 'axios'

import setAuthToken from '../../utils/setAuthToken'

import {
    AUTH,
    REGISTER_SUCCESS,
    USER_LOGGED,
    AUTH_ERROR,
    REGISTER_FAIL
} from '../types'



export const loadUser = () => async dispatch => {

  if(localStorage.token) {
    setAuthToken(localStorage.token)
  }
  try {
    const res = await axios.get('http://localhost:5000/api/auth')
    console.log(res.data)
    dispatch({
      type: USER_LOGGED,
      payload: res.data 
    })

    
  } catch (error) {
    dispatch({
      tpye: AUTH_ERROR
    })
  }

  return
}




export const  register = (formData) =>  async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const res = await axios.post('http://localhost:5000/api/register', formData, config)
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data 
    })
    loadUser()
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
    })
  }

  return 'done';
}

 