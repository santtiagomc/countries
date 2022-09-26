import React from "react";
import styles from "./styles/Nav.module.css"
import globe from "./Img/earthicon.png"
import { Link } from "react-router-dom";

export default function Nav () {
    return (
        <div className={styles.container2}>
            <div className={styles.container}>
                    <Link to='/activity' className={styles.link}>Crear Actividad</Link>
                    <Link to='/about' className={styles.link}>About</Link>
            </div>
            <p>SPA Countries</p>
            <a href="http://localhost:3000"><img className={styles.globe} src={globe} alt="globe"  /></a>
        </div>
    )
}