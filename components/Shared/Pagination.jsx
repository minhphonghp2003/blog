import React from 'react';
import "../../public/pagination.scss"
import { usePagination, DOTS } from "../CustomHook/usePagination";
const Pagination = ({ onPageChange,
    totalCount ,
    siblingCount ,
    currentPage ,
    pageSize , }) => {

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange[paginationRange.length - 1];
    return (
        <ul
            className={`pagination-container border-t-[#e8f3ec] border-t-[1px]`}
        >
            <li
                className={`pagination-item ${currentPage === 1 ? "disabled" : ""}`}
                onClick={onPrevious}
            >
                <div className="arrow left" />
                <div className="arrow left" />
            </li>
            {paginationRange.map(pageNumber => {
                if (pageNumber === DOTS) {
                    return <li className="pagination-item dots">&#8230;</li>;
                }

                return (
                    <li
                        className={`pagination-item ${pageNumber === currentPage ? "selected" : ""}`}
                        onClick={() => onPageChange(pageNumber)}
                    >
                        {pageNumber}
                    </li>
                );
            })}
            <li
                className={`pagination-item ${lastPage === currentPage ? "disabled" : ""}`}
                onClick={onNext}
            >
                <div className="arrow right" />
                <div className="arrow right" />
            </li>
        </ul>
    );
};

export default Pagination;