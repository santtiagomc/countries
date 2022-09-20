import React from "react";
import style from './styles/Pagination.module.css'

export default function Pagination({cityPerPage, allCitys, paginado}) {
    const pageNumber = []

    for ( let i = 1; i <= Math.ceil(allCitys / cityPerPage); i++) {
        pageNumber.push(i)
    }
    return (
        <nav>
            <ul className={style.lista1}>
                {pageNumber?.map(number => (
                    <li key={number}>
                        <button onClick={() => paginado(number)}>
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}