import React from "react";

export default function Card({ name, flags, continents}){
    return (
        <div>
            <h3>{name}</h3>
            <h5>{continents}</h5>
            <img src={flags} alt="img not found" width="150px" height="100px" />
        </div>
    );
}