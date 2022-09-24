import React from "react";
import styles from "./styles/Nav.module.css"
import globe from "./Img/earth.png"
import { Link } from "react-router-dom";

export default function Nav () {
    return (
        <div>
            <div className={styles.container}>
                <a href="http://localhost:3000"><img className={styles.globe} src={globe} alt="globe"  /></a>
                <Link to='/activity' className={styles.creation}>Crear Actividad</Link>
                <Link to='/about' className={styles.creation}>About</Link>
            </div>
        </div>
    )
}