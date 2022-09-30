import { GET_ALL_CITYS, GET_ACTIVITY, FILTER_ACTIVITY, FILTER_BY_CONTINENT, ORDER_SORT, GET_NAME_CITY, GET_DETAIL, POST_ACTIVITY, CLEAN_DETAIL} from "./Actions"

const initialState = {
    countries: [],
    filterCountries: [],
    activities: [],
    details: []
}

function rootReducer (state = initialState, action) {
    switch(action.type){
        
        case GET_ALL_CITYS:
            return {
                ...state,
                countries: action.payload,
                filterCountries: action.payload
            }
            case GET_ACTIVITY:
                return {
                    ...state,
                    activities: action.payload
                }
                case FILTER_BY_CONTINENT:
                    const allCountries = state.filterCountries;
                    const continentFilter = action.payload === 'All' 
                    ? allCountries 
                    : allCountries.filter(e => e.continents === action.payload)
                    return {
                        ...state,
                        countries: continentFilter
                    }
                    
                    case FILTER_ACTIVITY:
                        let newArr = []
            state.filterCountries.map(el => el.activities.forEach(e => {
                if (e.name === action.payload) {
                    newArr.push(el)
                }
            }))
            return {
                ...state,
                countries: newArr
            };
            

            case GET_NAME_CITY:
                return {
                    ...state,
                    countries: action.payload,
                filterCountries: action.payload
            }
        
            case GET_DETAIL:
                return {
                ...state,
                details : action.payload
            }
            
        case CLEAN_DETAIL: 
            return {
                ...state,
                details: []
            }
            
            case POST_ACTIVITY:
                return {
                ...state
            }
        case ORDER_SORT:
            if (action.payload === "default"){
                return {
                    ...state,
                    countries: state.countries
                }
            }
            if (action.payload === "az") {
                return {
                    ...state,
                    countries: state.countries.sort(function (a, b) {
                        if (a.name > b.name) {
                            return 1;
                        }
                        if (b.name > a.name) {
                            return -1;
                        }
                        return 0
                    }) 
                }
            } 
            if (action.payload === "za"){
                return{
                    ...state,
                    countries: state.countries.sort (function (a, b) {
                        if (a.name > b.name) {
                            return -1;
                        }
                        if (b.name > a.name) {
                            return 1
                        }
                        return 0;
                    }) 
                    
                }
            }
            if(action.payload === "asc" ){
                return {
                    ...state,
                    countries: state.countries.sort (function (a, b) {
                        if (a.population > b.population) {
                            return 1;
                        }
                    if (b.population > a.population) {
                        return -1;
                    }
                    return 0                        
                }) 
            }
        }
        if(action.payload === "desc"){
                return {
                    ...state,
                    countries: state.countries.sort (function (a, b) {
                        if (a.population > b.population) {
                        return -1;
                    }
                    if (b.population> a.population) {
                        return 1
                    }
                    return 0;
                })}
            }
            else{
                return {
                    ...state,
                }
            }
        default: 
            return state
        }
    }
    /* case BUTTON_POPULATION:
        const populationMax = state.countries;
        const filterPopu = action.payload === "btn"
        ? populationMax
        : populationMax.filter(e => e.population >= 50000000)
        return {
            ...state,
            countries: filterPopu
        } */

export default rootReducer;