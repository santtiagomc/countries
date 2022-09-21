import axios from "axios"

export const GET_ALL_CITYS = "GET_ALL_CITYS"
export const GET_ACTIVITY =  "GET_ACTIVITY"
export const FILTER_ACTIVITY = "FILTER_ACTIVITY"
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT"
export const ORDER_SORT = "ORDER_SORT"
export const GET_NAME_CITY = "GET_NAME_CITY"


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