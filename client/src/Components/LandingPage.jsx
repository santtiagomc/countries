import React from "react";
import { Link } from 'react-router-dom'
import style from "./styles/LandingPage.module.css"

export default function LandingPage () {
    return(
        <div className={style.container}>
            <div className={style.intro}>
                <h1 className={style.title}>Welcome to all Countrys 🌐</h1>
                <Link to='/countries'>
                    <button className={style.btn}>Get into...</button>
                </Link>
            </div>
        </div>
    )
}