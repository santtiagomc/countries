import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/Card.module.css"

export default function Card({ name, flags, id,  continents, population}){
    return (
        <Link to = {`/countries/${id}`}>
            <div className={styles.container}>
                <div>
                <div>
                    <h3>{name}</h3>
                    <img src={flags} alt="img not found" width="150px" height="100px" />
                    <h5>{continents}</h5>
                    <h3>{population}</h3>
                </div>
                </div>
            </div>
        </Link>
    );
}