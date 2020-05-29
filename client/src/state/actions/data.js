import { ADD_LEADS, DELETE_LEAD, GET_LEADS } from '../types'
import Axios from 'axios'

export const getLeads = () => async dispatch => {
  try {
    const res = await Axios.get('http://localhost:3000/api/leads')

    dispatch({
      type: GET_LEADS,
      payload: res.data,
    })
  } catch (error) {
    console.log(error)
  }
}
export const addLeads = formData => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const res = await Axios.post('http://localhost:3000/api/leads', formData, config)

    dispatch({
      type: ADD_LEADS,
      payload: res.data,
    })
  } catch (error) {
    console.log(error)
  }
}
