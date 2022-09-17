import { GET_ALL_CITYS } from "./Actions"

const initialState = {
    countries: []
}

function rootReducer (state = initialState, action) {
    switch(action.type){
        case GET_ALL_CITYS:
            return {
                ...state,
                countries: action.payload
            }
            default: 
                return state
    }
}

export default rootReducer;