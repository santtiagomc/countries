import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/Card.module.css"

export default function Card({ name, flags, id,  continents, population}){
    return (
        
            <div className={styles.container}>
                <div className={styles.titles}>
                    <h4 className={styles.name}>{name}</h4>
                    <img src={flags} alt="img not found"  className={styles.img} />
                </div>
                <div className={styles.info}>
                    <p>Continent: {continents}</p>
                    <p>Population: {population}</p>
                </div>
                <Link to = {`/countries/${id}`} >
                    <button className={styles.detail}>
                    Detail
                    </button>
                </Link>
            </div>
        
    );
}