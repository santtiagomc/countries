import React from "react";
import styles from "./styles/About.module.css"
import Nav from "./Nav";

export default function About (){
return (
    <div className={styles.container}>
        <Nav />
        <div className={styles.card}>
            <h1 className={styles.text}>About</h1>
            <h2 className={styles.text}>Santiago Parra Moreno</h2>
            <h3 className={styles.text}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi atque nihil nam iste qui dolorum at omnis sit! Voluptate magni cupiditate exercitationem aperiam excepturi sit vitae quae error earum quam.
            </h3>
        </div>
    </div>
)
}