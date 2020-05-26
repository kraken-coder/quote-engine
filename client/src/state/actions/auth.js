import axios from 'axios'

import {
    AUTH,
    REGISTER_SUCCESS
} from '../types'



 export const authenticate = () => ({
  type: AUTH  
})

export const  register =   (formData) =>  async dispatch => {
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
  } catch (error) {
    console.log(error)
  }

  return 'done';
}