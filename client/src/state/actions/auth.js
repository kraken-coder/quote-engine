import axios from 'axios'

import setAuthToken from '../../utils/setAuthToken'

import {
  AUTH,
  REGISTER_SUCCESS,
  USER_LOGGED,
  AUTH_ERROR,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from '../types'

export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token)
  }
  try {
    const res = await axios.get('http://localhost:3000/api/auth')

    dispatch({
      type: USER_LOGGED,
      payload: res.data,
    })

    console.log('loaded from ', window.location.pathname)
  } catch (error) {
    console.log( window.location.pathname, error)
    dispatch({
      type: AUTH_ERROR,
    })
  }

  return
}

export const register = formData => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const res = await axios.post(
      'http://localhost:3000/api/register',
      formData,
      config,
    )

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    })

    loadUser()
    
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response.data.msg,
    })
  }

  return 'done'
}

export const loginAc = formData => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const res = await axios.post('http://localhost:3000/api/auth', formData, config)
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    })
    loadUser()
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data.msg,
    })
  }

  return 'done'
}
