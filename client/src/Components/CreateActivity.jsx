import React, { useState, useEffect } from "react";
import { Link ,useHistory } from "react-router-dom";
import { postActivity, getAllCitys } from "../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles/CreateActivity.module.css"
import Nav from "./Nav"


function validation(input) {
    let errors = {}
    if (!input.name) {
        errors.name = 'Enter a name'
      } else if (input.name.length < 3) {
        errors.name = 'Minimum name of 3 characters'
      }
    if (!input.difficulty) {
      errors.difficulty = 'Difficulty is required'
    }
    if (!input.duration) {
      errors.duration = 'Min 1 hrs - Max 24 hrs'
    }
    if (!input.season) {
      errors.season = 'Season is required'
    }
    if (input.countries.length === 0) {
      errors.countries = 'Must have at least one country'
    }
    return errors;
  }



export default function CreateActivity() {
    const dispatch = useDispatch();
    const history = useHistory();
    const countries = useSelector(state => state.countries)
    const [errors, setErrors ] = useState({})
    

    const [input, setInput] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: []
    });


    const handleDelete = (e) => {
        setInput({
         ...input,
         countries: input.countries.filter(el => el !== e)
       })
     }

    function handleSubmit(e) {
        e.preventDefault()
    setErrors(validation(input))
    if (Object.keys(errors).length === 0) {
      dispatch(postActivity(input))
      alert('Actividad Creada con exito. !!!!')
      setInput({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countries: []
      })
      history.push('/countries')
    } else {
      alert('Faltan datos para completar la acividad.')
    }
}

function handleChange(e) {
    setInput({
        ...input,
        [e.target.name] : e.target.value
     })
    //  console.log(input)
    setErrors(validation({
        ...input,
        [e.target.name]: e.target.value
    }))

}

function handleSelectDificult (e) {
    setInput({
        ...input,
        difficulty: e.target.value
    })
}

function handleSelectCountry(e) {
    if(input.countries.includes(e.target.value)){
        return
    } else {
        setInput({
            ...input,
            countries: [...input.countries, e.target.value]
        })
    }
}
function handleSelectSeason(e) {
    setInput({
      ...input,
      season: e.target.value
    })
  }

useEffect (() => {
    dispatch(getAllCitys())
    setErrors(validation(input))
}, [dispatch, input])


    return (
        <div className={styles.back}>
                <Nav />
            <div className={styles.container}>
            
                <div className={styles.title}>
                    <h1>Create Activity</h1>
                </div>
                
                <form onSubmit={e => handleSubmit(e)} className={styles.form}>
                    <div className={styles.select}>
                        <label>Name</label>
                        <input 
                        type="text" 
                        value={input.name} 
                        name="name" 
                        onChange={e => handleChange(e)} />
                        {errors.name && (<p className={styles.err}>{errors.name}</p>)}
                    </div>
                    <div className={styles.select}>
                        <label>Difficulty</label>
                        <select onChange={e => handleSelectDificult(e)}>
                            <option value={""}>Chose a difficulty</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                        </select>
                        {errors.difficulty && (<p className={styles.err}>{errors.difficulty}</p>)}
                    </div>
                    <div className={styles.select}>
                        <label>Duration</label>
                        <input className='input' type="number" min="1" max="24" name='duration' placeholder='Ej: 1 ' value={input.duration} onChange={e => handleChange(e)} />
                        <label> hrs </label>
                        {errors.duration && (<p className={styles.err}>{errors.duration}</p>)}
                    </div>
                    <div className={styles.select}>
                    <label>Season: </label>
                        <select onChange={e => handleSelectSeason(e)}>
                            <option value={""}>Elija una temporada</option>
                            <option value="Spring">Primavera</option>
                            <option value="Summer">Verano</option>
                            <option value="Autumn">Otoño</option>
                            <option value="Winter">Invierno</option>
                        </select>
                        {errors.season && (<p className={styles.err}>{errors.season}</p>)}
                    </div>
                    <div className={styles.countriesSelect}>
                        <label>Countries</label>
                        <select onChange={e => handleSelectCountry(e)}>
                            {countries.map(c => {
                            return (
                                <option key={c.id} value={c.name}>{c.name}</option>)
                            })}
                        </select>
                        {errors.countries && (<p className={styles.err}>{errors.countries}</p>)}
                    </div>

                    <div className={styles.options}>
                        {input.countries.map(c => { 
                            
                        return (
                        <div key={c} className={styles.countries}>
                            <ul className={styles.ul}>
                            <li className={styles.li}>{c}</li>
                            <button onClick={() => handleDelete(c)} className={styles.btnx} >X</button>
                            </ul>      
                        </div>)
                        })}
                    </div>
                    {<div>
                        <button type ='submit' className={styles.btn}> CREATE </button>          
                        <Link to="/countries">
                        <button className={styles.btn}>BACK</button>
                        </Link>
                    </div>}
                </form>
            </div>
        </div>
    )

}