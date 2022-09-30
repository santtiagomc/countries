import { React, useState } from "react";
import style from './styles/Pagination.module.css'

export default function Pagination({cityPerPage, allCitys, paginado, currentPage, setCurrentPage }) {
    const pageNumber = []
    const [input, setInput] = useState(currentPage)
    const totalPages = Math.ceil(allCitys / cityPerPage)

    const pageRange = (currentPage, totalPages) => {
        let start = currentPage - 2;
        let end = currentPage + 2;

        if (end > totalPages) {
            if (start > 0) start -= end - totalPages;
            end = totalPages;
        }
        if (start <= 0) {
            if (end < totalPages) end += 2;
            start = 1;
        }
        return {
            start: start,
            end: end,
        }
    }

    
    function nextPage() {
        setCurrentPage(currentPage + 1);
        setInput(input - 1 );
    }
    
    function prevPage() {
        setCurrentPage(currentPage - 1);
        setInput(input - 1 );
    }
    const range = pageRange(currentPage, totalPages);

    for ( let i = range.start; i <= range.end; i++) {
        pageNumber.push(i)
    }
    
    return (
        <nav>
            <ul className={style.lista1}>
            <button onClick={prevPage} className={style.prev} disabled={currentPage === 1 || currentPage < 1}>Prev</button>
            {pageNumber?.map(number => (
                    <li key={number}>
                        <button onClick={() => paginado(number)} className={style.btn}>
                            {number}
                        </button>
                    </li>
                ))}
                <button onClick={nextPage} className={style.right} disabled={currentPage === Math.ceil(totalPages) || currentPage > Math.ceil(totalPages)}>Next</button>
            </ul>
        </nav>
    )
}
