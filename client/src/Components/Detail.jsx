import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../Redux/Actions";
import Loading from "./Img/girando.gif"
import styles from "./styles/Detail.module.css"



export default function Detail (props) {
    const dispatch = useDispatch()
    const id = props.match.params.id
    const country = useSelector((state) => state.details)
    


    

    useEffect(() => {
        dispatch(getDetail(id));
    },[dispatch, id])

    return (
        <div className={styles.container}>
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
                            <div>
                            {country[0].activities.length?
                                <h2>Activities:</h2> 
                                : <h4>There isn't activities available</h4>
                            }
                            {   country[0].activities.map(el => {
                                    return(
                                        <div key={el.id} >
                                            <h4>Name: {el.name}</h4>
                                            <h4>Difficulty: {el.difficulty}</h4>
                                            <h4>Duration: {el.duration}</h4>
                                            <h4>Season: {el.season}</h4>
                                        </div>
                                    )
                                })
                            }
                            </div>
                            
                        </div >
                        : <img src={Loading} alt="Loading..."  className={styles.loading}/>
                        } 
                            </div>

                        </div>
                        : <p>No se encuentra detalles del Pais.</p>
                    }
            </div>
        </div>
    )


}