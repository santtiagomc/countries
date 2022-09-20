import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameCity } from '../Redux/Actions';


export default function SearchBar(){

    const dispatch = useDispatch()
    const [name, setName] = useState("")

    function handleInputChange (e) {
        e.preventDefault();
        setName(e.target.value);
        // console.log(name)
    }

    function handleSubmit(e){
    e.preventDefault();
    if(name.length === 0) {
        return alert ("Please write a city")
    }else{
        dispatch(getNameCity(name));
        setName("")
        }
    }
        
        return (
        
                <div>
                    <input
                    type = "text"
                    placeholder='Search...'
                    value={name}
                    autoComplete='off'
                    onKeyPress={e => e.key === 'Enter' && handleSubmit(e)}
                    onChange = {(e) => handleInputChange(e)}
                    />
                    <button type = 'submit' 
                    onClick = {(e) => handleSubmit(e)} > Buscar </button>
                </div>
        )
}