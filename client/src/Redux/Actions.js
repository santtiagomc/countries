import axios from "axios"

export const GET_ALL_CITYS = "GET_ALL_CITYS"    

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