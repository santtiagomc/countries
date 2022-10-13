import { React, useState } from "react";
import style from './styles/Pagination.module.css'

export default function Pagination({cityPerPage, allCitys, paginado, currentPage, setCurrentPage }) {
    const pageNumber = []
    const [input, setInput] = useState(currentPage)
    const totalPages = Math.ceil(allCitys / cityPerPage)

    const [pageDisplayed, /*setPageDisplayed*/] = useState(4);
    const [maxPageDisplayed, setMaxPageDisplayed] = useState(4);
    const [minPageDisplayed, setMinPageDisplayed] = useState(0);

    const movePagesPrevius = (page) => {
        if (page === 1) movePages(0)
        else if (page <= 2 && page > 0) {
            setMaxPageDisplayed(4);
            setMinPageDisplayed(0);
        } else {
            if (page === 0) page = 1;
            let maxi = page + pageDisplayed - 3;
            let mini = maxi - pageDisplayed;
            setMaxPageDisplayed(maxi);
            setMinPageDisplayed(mini);
        }
    }

    const movePages = (page) => {
        if (page === pageNumber?.length) {
            movePagesPrevius(0)
            setMaxPageDisplayed(4);
            setMinPageDisplayed(0);
        } else {
            if (page === 0) page = pageNumber?.length;
            let maxi = page + pageDisplayed - 1;
            let mini = maxi - pageDisplayed;
            setMaxPageDisplayed(maxi);
            setMinPageDisplayed(mini);
        }
    }

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

    const firstPage = (e) => {
        movePages(1)
        paginado(1)
    }

    const lastPage = (e) => {
        movePages( totalPages - 1)
        paginado(totalPages)
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
            <button onClick={(e) => firstPage(e)}> ... </button>
            <button onClick={prevPage} className={style.btn} disabled={currentPage === 1 || currentPage < 1}>Prev</button>
            {pageNumber?.map(number => (
                    <li key={number}>
                        <button onClick={() => paginado(number)} className={(currentPage === number && style.btn2) || style.btn}>
                            {number}
                        </button>
                    </li>
                ))}
                <button onClick={nextPage} className={style.btn} disabled={currentPage === Math.ceil(totalPages) || currentPage > Math.ceil(totalPages)}>Next</button>
                <button onClick={(e) => lastPage(e)}> ... </button>
            </ul>
        </nav>
    )
}
