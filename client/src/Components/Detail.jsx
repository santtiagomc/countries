import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../Redux/Actions";

export default function Detail (props) {
    const dispatch = useDispatch()
    const id = props.match.params.id
    const country = useSelector((state) => state.details)

    

    useEffect(() => {
        dispatch(getDetail(id));
    },[dispatch, id])

    return (
        <div>
            <div>
            {country ?
                        <div >
                            <div >
                            {country.length > 0 ?
                        <div>
                            <h1>{country[0].name}</h1>
                            <img src={country[0].flags} alt="img"  width="150px" height="100px"/>
                            <h4>Continent: {country[0].continents}</h4>
                            <h4>Capital: {country[0].capital}</h4>
                            <h4>Subregion: {country[0].subregion}</h4>
                            <h4>Area: {country[0].area}</h4>
                            <h4>Population: {country[0].population}</h4>
                            {country[0].activities.length?
                                <h4>Activities:</h4> 
                                : <h4>There isn't activities available</h4>
                            }
                            {   country[0].activities.map(el => {
                                    return(
                                        <h5 key={el.id}>Name: {el.name} <br/> Difficulty: {el.difficulty} <br/> Duration: {el.duration} <br/> Season: {el.season}</h5>
                                    )
                                })
                            }
                        </div>
                        : <h1>Loading...</h1>
                        }  
                            </div>

                        </div>
                        : <p>No se encuentra detalles del Pais.</p>
                    }
            </div>
        </div>
    )


}