import React from "react";
import styles from "./styles/About.module.css"
import Nav from "./Nav";

export default function About (){
return (
    <div className={styles.container}>
        <Nav />
        <div className={styles.card}>
            <h1 className={styles.text}>Santiago Parra Moreno</h1>
            <h3 className={styles.text}>
            Soy Full Stack Web Developer, con orientacion al desarrollo en Frontend.
            He desarrollado diferentes proyectos entre ellos SPA(Single Page Application)
            donde e logrado afianzar las habilidades aprendidas como lo son en:

            Frontend: HTML, CSS, JavaScript, React, Redux
            Backend: Express, Node, Sequelize
            Database: PostgreSQL
            VCS: Git/GitHub.

            Estoy totalmente abierto a aprender nuevas tecnologias, como a
            enfrentar nuevos desafios, para ir creciendo 
            tanto personal como profesionalmente.
            </h3>
        </div>
    </div>
)
}