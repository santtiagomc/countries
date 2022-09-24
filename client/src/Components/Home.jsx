import React from "react";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAllCitys, getActivity, filterByContinents, orderSort, filterActivity } from '../Redux/Actions'
import Nav from "./Nav"
import styles from "./styles/Home.module.css"

import Card from "./Card";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";


export default function Home () {

    const dispatch = useDispatch()
    const allCitys = useSelector(state => state.countries)
    // const activities = useSelector(state => state.activities)
    
    const [currentPage, setCurrentPage] = useState(1)
    const cityPerPage = 10
    const numbersOfLastCity = currentPage * cityPerPage
    const numberOfFirstCity = numbersOfLastCity - cityPerPage
    
    const currentCity = allCitys.slice(numberOfFirstCity, numbersOfLastCity)

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    const allActivities = useSelector((state) => state.activities);
    const activityName = allActivities.map(a => a.name)
    // console.log('Activities: ', activitys);

    function handleSelectContinent (e) {
        e.preventDefault();
        dispatch(filterByContinents(e.target.value))
    }


    
    function handleFilterByActivity (e) {
        e.preventDefault();
        dispatch(filterActivity(e.target.value))
    };
    
    
    function handleClick(e){
        e.preventDefault();
        dispatch(getAllCitys());
    }

    const [,setOrden] = useState('Default')
    function handleSort (e){
        e.preventDefault()
        dispatch(orderSort(e.target.value))
        setCurrentPage(1)
        setOrden(e.target.value)
    }

    useEffect (() => {
        dispatch(getAllCitys());
        dispatch(getActivity());
    }, [dispatch])

    return (
        <div className={styles.container}>
            
            <Nav />
            <SearchBar />
            <button onClick={e => {handleClick(e)}}>
                    Refresh
                </button>
            <div>
                    <Pagination 
                        cityPerPage={cityPerPage}
                        allCitys={allCitys.length}
                        paginado={paginado}
                    />
            </div>
            
            <div className={styles.filter}>
                <h3>Filter By</h3>
                <select onChange={e => handleFilterByActivity(e)}>
                    <option value= 'All'>Activities</option>
                    {activityName.map((el) => {
                            return (
                                <option key={el} value={el}>{el}</option>
                            )}
                        )}
                </select> 
                <select onChange={e => handleSelectContinent(e)} >
                    <option value='All'>All Continents</option>
                    <option value='Africa'>África</option>
                    <option value='North America'>North America</option>
                    <option value='South America'>South America</option>
                    <option value='Antarctica'>Antártica</option>
                    <option value='Asia'>Asia</option>
                    <option value='Europe'>Europa</option>
                    <option value='Oceania'>Oceanía</option>

                </select>
                <select onChange={e => handleSort(e)}>
                    <option value="default">Sort By...</option>
                    <option value="az">A-Z</option>
                    <option value="za">Z-A</option>
                </select>
                <select onChange={e => handleSort(e)}>
                    <option value="default">Population</option>
                    <option value="desc">Max Population</option>
                    <option value="asc">Min Population</option>
                </select>
            </div>
                
                
                
            <div >
                {
                    currentCity.map(el => {
                        return(
                            <div key={el.id} className={styles.card}>
                                
                                <Card 
                                    name = {el.name.toUpperCase()}
                                    id = {el.id}
                                    continents = {el.continents}
                                    flags = {el.flags}
                                    population = {el.population}
                                    key= {el}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
        
    )

}