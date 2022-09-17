import React from "react";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAllCitys } from '../Redux/Actions'
import { Link } from "react-router-dom";
import Card from "./Card";


export default function Home () {

    const dispatch = useDispatch()
    const allCitys = useSelector((state) => state.countries)

    const [currentPage] = useState(1)
    const cityPerPage = 10
    const numbersOfLastCity = currentPage * cityPerPage
    const numberOfFirstCity = numbersOfLastCity - cityPerPage
    
    const currentCity = allCitys.slice(numberOfFirstCity, numbersOfLastCity)


    

    function handleClick(e){
        e.preventDefault();
        dispatch(getAllCitys());
    }


    useEffect (() => {
        dispatch(getAllCitys());
    }, [dispatch])

    return (
        <div>
            <div>
                <Link to='/activity'>Crear Actividad</Link>
                <h1>Vamos cities</h1>
                <button onClick={e => {handleClick(e)}}>
                    Volver a cargar todas las ciudades
                </button>
            </div>
            <div>
                <h3>Filter By</h3>
                <select>
                    <option value="continent">Continent</option>
                    <option value="activity"> Activity</option>
                </select>
                <select>
                    <option value="default">Sort By...</option>
                    <option value="az">A-Z</option>
                    <option value="za">Z-A</option>
                </select>
                <select>
                    <option value="asc">Max Population</option>
                    <option value="desc">Min Population</option>
                </select>
            
               {
                    currentCity.map(el => {
                        return(
                            <div key={el.id}>
                                <Card 
                                    name = {el.name.toUpperCase()}
                                    id = {el.id}
                                    continents = {el.continents}
                                    flags = {el.flags}
                                />
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )

}