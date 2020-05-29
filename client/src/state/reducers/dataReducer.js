import {
    ADD_LEADS,
    DELETE_LEAD,
    GET_LEADS
} from '../types'


const initialState = {
    leads: [],
    leadsData: {
        converted: 0
    },
    recentAdded: {}
}

export default ( state = initialState, action) => {
        switch (action.type) {

            case GET_LEADS:
                const convLeads = action.payload
                .filter(lead => lead.converted)

                return{
                    ...state,
                    leads: action.payload,
                    leadsData: {... state.leadsData, converted: convLeads.length}
                }

            default:
                return state
        }
}
