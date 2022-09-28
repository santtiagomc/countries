import axios from "axios"

export const GET_ALL_CITYS = "GET_ALL_CITYS"
export const GET_ACTIVITY =  "GET_ACTIVITY"
export const FILTER_ACTIVITY = "FILTER_ACTIVITY"
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT"
export const ORDER_SORT = "ORDER_SORT"
export const GET_NAME_CITY = "GET_NAME_CITY"
export const GET_DETAIL = "GET_DETAIL"
export const CLEAN_DETAIL = "CLEAN_DETAIL"
export const POST_ACTIVITY = "POST_ACTIVITY"
export const BUTTON_POPULATION = "BUTTON_POPULATION"


export function getAllCitys () {
    return async function (dispatch){
        try {
            var json = await axios.get("http://localhost:3001/country")
            return dispatch ({
                type: GET_ALL_CITYS,
                payload: json.data
            })
        } catch (error) {
            alert("Don't have any connections 😫")
        }
    }
}
export function getActivity () {
    return async function (dispatch){
        var json = await axios("http://localhost:3001/activity")
        return dispatch ({
            type: GET_ACTIVITY,
            payload: json.data
        })
    }
}
export function filterByContinents (payload) {
    return {
        type: FILTER_BY_CONTINENT,
        payload
    }
}

export function orderSort(payload){
    return {
        type: ORDER_SORT,
        payload
    }
}

export function getNameCity (payload) {
    return async function (dispatch) {
        try {
            var json = await axios.get(`http://localhost:3001/country?name=${payload}`);
            return dispatch ({
                type: GET_NAME_CITY,
                payload: json.data
            })
        }
        catch(error) {
            alert("Try another city")
        }
    }
};
export function filterActivity (payload){
    return{
        type: FILTER_ACTIVITY,
        payload
    }
}
export function getDetail (payload) {
    return async function(dispatch){
        try{
            const json = await axios.get(`http://localhost:3001/country/${payload}`)
            return dispatch({
                type: GET_DETAIL,
                payload: json.data
            });
        }
      catch(error){
        alert("Try another ID")
      }
    }    
}

export function cleanDetail(payload) {
    return {
        type: CLEAN_DETAIL,
        payload
    }
}

export function postActivity (payload) {
    return async (dispatch) => {
        try{
            await axios.post('http://localhost:3001/activity', payload);
            return {
                type: POST_ACTIVITY,
                }
        } 
        catch(error){
              alert("Post failed")
        }
    } 
}

/* export function buttonPop (payload) {
    return {
        type: BUTTON_POPULATION,
        payload
    }
} */
