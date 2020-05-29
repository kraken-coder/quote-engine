import {
    ADD_LEADS,
    DELETE_LEAD,
    GET_LEADS
} from '../types'


const initialState = {
    leads: [],
    leadsData: {

    },
    recentAdded: {}
}

export default ( state = initialState, action) => {
        switch (action.type) {

            case GET_LEADS:
                return{
                    ...state,
                    leads: action.payload
                }

            default:
                return state
        }
}
