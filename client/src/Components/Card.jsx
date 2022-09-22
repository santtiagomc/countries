import React from "react";
import { Link } from "react-router-dom";

export default function Card({ name, flags, id,  continents, population}){
    return (
        <div>
            <Link to = {`/countries/${id}`}>
                <h3>{name}</h3>
                <h5>{continents}</h5>
                <h3>{population}</h3>
                <img src={flags} alt="img not found" width="150px" height="100px" />
            </Link>
        </div>
    );
}